export default function SkillNode({node}){
    return(
        <div className={"relative group flex flex-col bg-yellow-300 rounded-full max-h-48 max-w-48 flex items-center justify-center"}>
            <span className={"text-xl text-black"}>{node.title}</span>
            <span className={"text-black"}>{node.desc}</span>
            <button className={"justify-center flex items-center absolute top-1 right-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-red-300 rounded-full hover:bg-red-700"}>X</button>
        </div>
    )
}