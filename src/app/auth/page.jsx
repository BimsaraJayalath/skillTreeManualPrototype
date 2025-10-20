'use client';

import {useState} from 'react';
import AuthForm from "@/components/authForm";

export default function AuthPage() {
    const [mode, setMode] = useState('login');
    const [status, setStatus] = useState('');

    const handleSubmit = ({email, password}) => {
        // For now, fake login/signup (no Supabase)
        if (mode === 'signup') {
            console.log('Fake signup:', {email, password});
            setStatus(`✅ Account created for ${email}`);
        } else {
            console.log('Fake login:', {email, password});
            setStatus(`✅ Logged in as ${email}`);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <AuthForm mode={mode} onSubmit={handleSubmit}/>
            <div className="text-center mt-4">
                <p className="text-gray-600">{status}</p>
                <p className="mt-2 text-sm">
                    {mode === 'login' ? (
                        <>
                            Don’t have an account?{' '}
                            <button
                                onClick={() => setMode('signup')}
                                className="text-blue-600 hover:underline cursor-pointer"
                            >
                                Sign up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button
                                onClick={() => setMode('login')}
                                className="text-blue-600 hover:underline"
                            >
                                Log in
                            </button>
                        </>
                    )}
                </p>
            </div>
        </main>
    );
}
