import SkillNode from "@/components/skillNode";
import EmptySkillNode from "@/components/emptySkillNode";

export default function testingPage(){
    return(
        <div className={"grid grid-cols-1 gap-3 justify-center place-items-center"}>
            <SkillNode/>
            <SkillNode/>
            <EmptySkillNode/>
            <SkillNode/>
        </div>
    )
}