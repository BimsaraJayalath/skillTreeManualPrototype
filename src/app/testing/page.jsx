"use client";

import SkillTree from "@/components/skillTree";
import EditModal from "@/components/editModal";
import {useState} from "react";

export default function testingPage() {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className={"grid grid-cols-1 gap-3 justify-center place-items-center"}>
            {isEditing ? (
                <EditModal onCancel={() => setIsEditing(false)}/>
            ) : (
                <SkillTree onEdit={() => setIsEditing(true)}/>
            )}
        </div>
    )
}