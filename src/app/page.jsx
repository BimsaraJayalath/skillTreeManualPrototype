"use client";

import SkillTree from "@/components/skillTree";
import EditModal from "@/components/editModal";
import {useState} from "react";

export default function Home() {

    const [isEditing, setIsEditing] = useState(false);

    const [nodes, setNodes] = useState([
        {id: 0, filled: true, parentID: null, title: "Root", desc: "Start Here", children: [1]},
        {id: 1, filled: false, parentID: 0, title: "Empty", desc: "Click to Spawn", children: []}
    ])

    return (
        <div className={"grid grid-cols-1 gap-3 justify-center place-items-center"}>
            {isEditing ? (
                <EditModal onCancel={() => setIsEditing(false)}/>
            ) : (
                <SkillTree nodes={nodes} setNodes={setNodes} onEdit={() => setIsEditing(true)}/>
            )}
        </div>
    )
}