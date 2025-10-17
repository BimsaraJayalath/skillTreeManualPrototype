export default function EditModal({onCancel}) {

    const buttonBase = "cursor-pointer bg-yellow-300 hover:bg-green-300 rounded-2xl p-3 text-black"

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
            <div className={"flex flex-row gap-4"}>
                <button
                    className={buttonBase}>Confirm
                </button>
                <button
                    onClick={onCancel}
                    className={buttonBase}>Cancel
                </button>
            </div>
        </div>
    )
}