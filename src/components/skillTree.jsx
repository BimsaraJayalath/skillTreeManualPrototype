"use client";

import {useState} from "react";
import SkillNode from "@/components/skillNode";
import EmptySkillNode from "@/components/emptySkillNode";
export default function SkillTree(){

    const [nodes, setNodes] = useState([
        {id: 0, filled:true, parentID: null, title: "Root", desc: "Start Here"},
        {id: 1, filled:false, parentID: 0, title: "Empty", desc: "Click to Spawn"}
    ])

    function handleSpawn(id){
        const updated = nodes.map(node => node.id === id ? {...node, filled: true}: node);
        setNodes(updated);
    }

    function handleEmptyNodeClick(id){
        setNodes(prevNodes => {
            const updated = prevNodes.map(node =>
            node.id === id? {...node, filled:true}: node);

            const newNode = {
                id: Date.now(),
                filled:false,
                parentID: id,
                title: "Empty",
                desc: "Click to Spawn"
            };
            return [...updated, newNode];
        })

        {/*prevNodes is to collect the latest update*/}
    }

    function handleDeletion(id){
        const updated = nodes.map(node => node.id === id? {...node, filled: false}: node);
        setNodes(updated);
    }


    return(
        <div className={"grid grid-cols-1 gap-4"}>
            {nodes.map(node =>
            node.filled ? (<SkillNode key={node.id} node={node}/>) : (<EmptySkillNode key={node.id} onClick={() => handleEmptyNodeClick(node.id)}/>))}
        </div>
    )
}