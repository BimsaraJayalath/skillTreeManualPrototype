import {useState} from "react";

export default function EditModal({node, onCancel, onConfirm}) {

    const buttonBase = "cursor-pointer bg-yellow-300 hover:bg-green-300 rounded-2xl p-3 text-black"

    const [title, setTitle] = useState(node.title);
    const [desc, setDesc] = useState(node.desc);

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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <span>Description</span>
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            <div className={"flex flex-row gap-4"}>
                <button
                    onClick={() => onConfirm(node.id, title, desc)}
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