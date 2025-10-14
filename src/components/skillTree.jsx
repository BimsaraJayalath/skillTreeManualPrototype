"use client";

import {useState} from "react";
import SkillNode from "@/components/skillNode";
import EmptySkillNode from "@/components/emptySkillNode";
export default function SkillTree(){

    const [nodes, setNodes] = useState([
        {id: 0, filled:true, parentID: null},
        {id: 1, filled:false, parentID: 0}
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
                parentID: id
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
            node.filled ? (<SkillNode key={node.id}/>) : (<EmptySkillNode key={node.id} onClick={() => handleEmptyNodeClick(node.id)}/>))}
        </div>
    )
}