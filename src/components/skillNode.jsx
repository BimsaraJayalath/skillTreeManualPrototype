export default function SkillNode({name = "Root Node", desc = "Start Here"}){
    return(
        <button>
            <div className={"flex flex-col bg-yellow-300 rounded-full max-h-32 max-w-32"}>
                <span className={"text-2xl"}>{name}</span>
                <span>{desc}</span>
            </div>
        </button>
    )
}