'use client';

import {useState} from 'react';

export default function AuthForm({mode = 'login', onSubmit}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const isSignup = mode === 'signup';

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        setError(null);
        onSubmit({email, password});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-sm p-6 border rounded-2xl shadow-md bg-black"
        >
            <h2 className="text-xl font-bold text-center">
                {isSignup ? 'Create Account' : 'Log In'}
            </h2>

            <input
                type="email"
                placeholder="Email address"
                className="border p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
                {isSignup ? 'Sign Up' : 'Log In'}
            </button>
        </form>
    );
}
