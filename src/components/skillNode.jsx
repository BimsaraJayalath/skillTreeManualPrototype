export default function SkillNode({node, onDeleteClick, onEditClick, onToggleComplete}) {
    return (
        <div
            className={`relative group flex-col rounded-full max-h-48 max-w-48 flex items-center justify-center ${node.completed ? "bg-red-400" : "bg-yellow-300"}`}>
            <span className={"text-xl text-black"}>{node.title}</span>
            <span className={"text-black"}>{node.desc}</span>
            <button onClick={onDeleteClick}
                    className={"justify-center flex items-center absolute top-1 right-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-red-300 rounded-full hover:bg-red-700"}>X
            </button>
            <button
                onClick={onEditClick}
                className={"justify-center flex items-center absolute top-1 left-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-blue-300 rounded-full hover:bg-blue-700"}>
                E
            </button>
            <button
                onClick={onToggleComplete}
                className={"justify-center flex items-center absolute bottom-1 left-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-green-300 rounded-full hover:bg-green-700"}>M
            </button>
        </div>
    )
}