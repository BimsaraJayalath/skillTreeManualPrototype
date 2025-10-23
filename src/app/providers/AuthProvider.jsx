'use client';

import {createContext, useContext, useEffect, useState} from 'react';
import {supabase} from "../lib/supabaseClient";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1️⃣ Load current session
        async function loadUser() {
            const {data} = await supabase.auth.getUser();
            setUser(data?.user ?? null);
            setLoading(false);
        }

        loadUser();

        // 2️⃣ Listen for login/logout events
        const {data: subscription} = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
            }
        );

        // 3️⃣ Cleanup on unmount
        return () => subscription?.subscription?.unsubscribe();
    }, []);

    const value = {user, loading};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// 🔹 Custom hook for easy access
export function useAuth() {
    return useContext(AuthContext);
}
