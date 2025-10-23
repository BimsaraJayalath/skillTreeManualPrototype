'use client';

import {useAuth} from '../app/providers/AuthProvider';
import {supabase} from "../app/lib/supabaseClient";
import {useRouter} from 'next/navigation';

export default function Navbar() {
    const {user, loading} = useAuth();
    const router = useRouter();

    async function handleSignOut() {
        await supabase.auth.signOut();
        router.refresh(); // Re-render to clear user state
    }

    return (
        <nav className="w-full flex justify-between items-center px-6 py-3 bg-gray-100 border-b border-gray-300">
            <div
                className="text-lg font-bold cursor-pointer"
                onClick={() => router.push('/')}
            >
                SkillTree
            </div>

            {/* Right side */}
            {loading ? (
                <div className="text-gray-500 text-sm">Loading...</div>
            ) : user ? (
                <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700">
            👋 {user.email}
          </span>
                    <button
                        onClick={handleSignOut}
                        className="text-sm text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => router.push('/auth')}
                    className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md"
                >
                    Log In
                </button>
            )}
        </nav>
    );
}
