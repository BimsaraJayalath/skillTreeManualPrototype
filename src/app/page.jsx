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

    const [editingNodeId, setEditingNodeId] = useState(null);
    const editingNode = nodes.find((node) => node.id === editingNodeId);
    const [isConfirmation, setIsConfirmation] = useState(false);

    const handleEditClick = (id) => {
        setEditingNodeId(id);
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

    return (
        <div className={"grid grid-cols-1 gap-3 justify-center place-items-center"}>

            {modal.type === null && (
                <SkillTree
                    nodes={nodes}
                    setNodes={setNodes}
                    onEdit={handleEditClick}
                />
            )}

            {modal.type === "Edit" && (
                <EditModal
                    node={editingNode}
                    onConfirm={handleEditConfirm}
                    onCancel={handleEditCancel}
                />
            )}

            {modal.type === "Confirm" && (
                <ConfirmationModal/>
            )}

        </div>
    );
}