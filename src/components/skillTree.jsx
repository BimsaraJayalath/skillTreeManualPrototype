"use client";

import {useState} from "react";
import SkillNode from "@/components/skillNode";
import EmptySkillNode from "@/components/emptySkillNode";
export default function SkillTree(){

    const [nodes, setNodes] = useState([
        {id: 1, filled:false},
        {id: 2, filled:false},
        {id: 3, filled:false},
    ])

    function handleSpawn(id){
        const updated = nodes.map(node => node.id === id ? {...node, filled: true}: node);
        setNodes(updated);
    }

    function handleDeletion(id){
        const updated = nodes.map(node => node.id === id? {...node, filled: false}: node);
        setNodes(updated);
    }


    return(
        <div className={"grid grid-cols-1 gap-4"}>
            {nodes.map(node =>
            node.filled ? (<SkillNode key={node.id} onClick={()=>handleDeletion(node.id)}/>) : (<EmptySkillNode key={node.id} onClick={() => handleSpawn(node.id)}/>))}
        </div>
    )
}