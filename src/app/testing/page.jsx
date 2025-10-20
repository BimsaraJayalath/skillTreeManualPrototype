"use client";
import {useEffect} from "react";
import {supabase} from "../lib/supabaseClient";

export default function Home() {
    useEffect(() => {
        async function testConnection() {
            const {data, error} = await supabase.from("skillTree Nodes").insert([
                {
                    title: "Bimbi's Root",
                    desc: "Oh we gettin there",
                    filled: true,
                    completed: false,
                    parent_id: null,
                    children: [],
                },
            ]).select();
            
            console.log("Inserted:", data, "Error:", error);
        }

        testConnection();
    }, []);

    return (
        <div className="p-10">
            <h1>Supabase Connection Test</h1>
        </div>
    );
}
