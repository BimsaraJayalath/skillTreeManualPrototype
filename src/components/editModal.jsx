export default function EditModal() {
    return (
        <div className={"flex flex-col items-center"}>
            <div className={"flex flex-col items-center"}>
                <span>Title</span>
                <input
                    type={"text"}
                    placeholder={"Enter Title"}
                />
                <span>Description</span>
                <textarea
                    placeholder={"Enter Description"}
                />
            </div>
            <div className={"flex flex-row gap-2"}>
                <button className={"cursor-pointer"}>Confirm</button>
                <button className={"cursor-pointer"}>Cancel</button>
            </div>
        </div>
    )
}