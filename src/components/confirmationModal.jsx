import {useState} from "react";

export default function ConfirmationModal({node, Message = "Are You Sure?", onConfirm, onCancel}) {

    if (!node) {
        return (
            <div>
                Something went wrong
                <div className={"flex flex-row gap-4"}>
                    <button
                        onClick={onCancel}
                    >Cancel
                    </button>
                </div>
            </div>

        )
    }
    return (
        <div>
            <span>{Message}</span>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}