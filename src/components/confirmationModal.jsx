import {useState} from "react";

export default function ConfirmationModal({Message = "Are You Sure?", onConfirm, onCancel}) {
    return (
        <div>
            <span>{Message}</span>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}