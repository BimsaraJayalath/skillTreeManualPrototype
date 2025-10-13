import SkillNode from "@/components/skillNode";

export default function testingPage(){
    return(
        <div className={"grid grid-cols-1 gap-3 justify-center place-items-center"}>
            <SkillNode/>
            <SkillNode/>
            <SkillNode/>
        </div>
    )
}