"use client";

import SkillTree from "@/components/skillTree";
import EditModal from "@/components/editModal";
import ConfirmationModal from "@/components/confirmationModal";

import {useState} from "react";

export default function Home() {

    const [nodes, setNodes] = useState([
        {id: 0, filled: true, parentID: null, title: "Root", desc: "Start Here", children: [1]},
        {id: 1, filled: false, parentID: 0, title: "Empty", desc: "Click to Spawn", children: []}
    ])

    const [modal, setModal] = useState({
        type: null,
        nodeId: null,
    });

    const activeNode = nodes.find((node) => node.id === modal.nodeId);

    const handleEditClick = (id) => {
        setModal({type: "Edit", nodeId: id});
    }

    const handleEditCancel = () => {
        setModal({type: null, nodeId: null});
    }

    const handleEditConfirm = (id, newTitle, newDesc) => {
        setNodes(prevNodes => prevNodes.map(node =>
                node.id === id ? {...node, title: newTitle, desc: newDesc}
                    : node
            )
        );
        setModal({type: null, nodeId: null});
    };

    const handleDeleteClick = (id) => {
        setModal({type: "Delete", nodeId: id})
    }

    function handleDeleteConfirm(id) {
        setNodes(prevNodes => prevNodes.filter(node => node.id !== id));
    }

    return (
        <div className={"grid grid-cols-1 gap-3 justify-center place-items-center"}>

            {modal.type === null && (
                <SkillTree
                    nodes={nodes}
                    setNodes={setNodes}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                />
            )}

            {modal.type === "Edit" && (
                <EditModal
                    node={activeNode}
                    onConfirm={handleEditConfirm}
                    onCancel={handleEditCancel}
                />
            )}

            {modal.type === "Delete" && (
                <ConfirmationModal
                    node={activeNode}
                    onCancel={handleEditCancel}
                    onConfirm={handleDeleteConfirm}/>
            )}

        </div>
    );
}