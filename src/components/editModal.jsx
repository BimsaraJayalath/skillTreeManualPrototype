export default function EditModal({node, onCancel}) {

    const buttonBase = "cursor-pointer bg-yellow-300 hover:bg-green-300 rounded-2xl p-3 text-black"

    if (!node) {
        return (
            <div>
                Something went wrong
                <div className={"flex flex-row gap-4"}>
                    <button
                        onClick={onCancel}
                        className={buttonBase}>Cancel
                    </button>
                </div>
            </div>

        )
    }
    return (
        <div className={"flex flex-col items-center"}>
            <div className={"flex flex-col items-center"}>
                <span>Title</span>
                <input
                    type={"text"}
                    placeholder={node.title}
                />
                <span>Description</span>
                <textarea
                    placeholder={node.desc}
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