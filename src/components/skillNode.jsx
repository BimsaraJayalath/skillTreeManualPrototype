export default function SkillNode({onClick, name = "Root Node", desc = "Start Here"}){
    return(
        <button
        className={"cursor-pointer"}
        onClick={onClick}
        >
            <div className={"flex flex-col bg-yellow-300 rounded-full max-h-32 max-w-32"}>
                <span className={"text-2xl"}>{name}</span>
                <span>{desc}</span>
            </div>
        </button>
    )
}