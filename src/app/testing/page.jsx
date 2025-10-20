"use client";
import {useEffect} from "react";
import {supabase} from "../lib/supabaseClient";

export default function Home() {
    useEffect(() => {
        async function testConnection() {
            const {data, error} = await supabase.from("skillTree Nodes").select("*");
            console.log("Data:", data, "Error:", error);
        }

        testConnection();
    }, []);

    return (
        <div className="p-10">
            <h1>Supabase Connection Test</h1>
        </div>
    );
}
