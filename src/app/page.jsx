"use client";

import SkillTree from "@/components/skillTree";
import EditModal from "@/components/editModal";
import {useState} from "react";

export default function Home() {

    const [nodes, setNodes] = useState([
        {id: 0, filled: true, parentID: null, title: "Root", desc: "Start Here", children: [1]},
        {id: 1, filled: false, parentID: 0, title: "Empty", desc: "Click to Spawn", children: []}
    ])

    const [isEditing, setIsEditing] = useState(false);
    const [editingNodeId, setEditingNodeId] = useState(null);

    const handleEditClick = (id) => {
        setEditingNodeId(id);
    }

    const handleEditCancel = () => {
        setEditingNodeId(null);
    }

    return (
        <div className={"grid grid-cols-1 gap-3 justify-center place-items-center"}>
            {editingNodeId === null ? (
                <SkillTree nodes={nodes} setNodes={setNodes} onEdit={() => handleEditClick}/>
            ) : (
                <EditModal onCancel={handleEditCancel}/>
            )}
        </div>
    )
}