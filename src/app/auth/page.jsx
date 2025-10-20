'use client';

import {useState} from 'react';
import {supabase} from "../lib/supabaseClient";
import AuthForm from "@/components/authForm";

export default function AuthPage() {
    const [mode, setMode] = useState('login');
    const [status, setStatus] = useState('');

    async function handleSubmit({email, password}) {
        setStatus('⏳ Processing...');

        try {
            if (mode === 'signup') {
                const {data, error} = await supabase.auth.signUp({
                    email,
                    password,
                });

                if (error) throw error;

                if (data?.user) {
                    setStatus(`✅ Account Created for ${email}`);
                } else {
                    setStatus('✅ Signup Email Sent - Check Your Inbox');
                }

            } else {
                const {data, error} = await supabase.auth.signInWithPassword({
                    email, password,
                });
                if (error) throw error;

                if (data?.user) {
                    setStatus(`✅ Logged in as: ${data.user.email}`);
                } else {
                    setStatus('⚠ Login successful but no user detected.');
                }
            }
        } catch (err) {
            setStatus(`❌ Error: ${err.message}`);
        }
    }

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
