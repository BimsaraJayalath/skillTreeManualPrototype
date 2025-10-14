export default function SkillNode({node}){
    return(
        <button
        className={"cursor-pointer"}
        >
            <div className={"flex flex-col bg-yellow-300 rounded-full max-h-32 max-w-32"}>
                <span className={"text-2xl"}>{node.title}</span>
                <span>{node.desc}</span>
            </div>
        </button>
    )
}