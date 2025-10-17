"use client";

import {useState} from "react";
import SkillNode from "@/components/skillNode";
import EmptySkillNode from "@/components/emptySkillNode";

export default function SkillTree({nodes, setNodes, onEdit}) {

    function handleSpawn(id) {
        const updated = nodes.map(node => node.id === id ? {...node, filled: true} : node);
        setNodes(updated);
    }

    function handleEmptyNodeClick(id) {
        setNodes(prevNodes => {
            const updated = prevNodes.map(node =>
                node.id === id ? {...node, filled: true} : node);

            const newNode = {
                id: Date.now(),
                filled: false,
                parentID: id,
                title: "Empty",
                desc: "Click to Spawn"
            };
            return [...updated, newNode];
        })

        {/*prevNodes is to collect the latest update*/
        }
    }

    function handleDeletion(id) {
        setNodes(prevNodes => prevNodes.filter(node => node.id !== id));
    }


    return (
        <div className={"grid grid-cols-1 gap-4"}>
            {nodes.map(node =>
                node.filled ? (<SkillNode key={node.id} node={node}
                                          onEditClick={onEdit}
                                          onDeleteClick={() => handleDeletion(node.id)}/>) : (
                    <EmptySkillNode key={node.id} onClick={() => handleEmptyNodeClick(node.id)}/>))}
            <button
                className={"cursor-pointer"}
                onClick={onEdit(1)}>Edit
            </button>
        </div>

    )
}