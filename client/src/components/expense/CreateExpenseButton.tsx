import { MdOutlineAttachMoney } from "react-icons/md";
import ExpenseDialog from "./ExpenseDialog";
import { useEffect, useState } from "react";
import { userInfo } from "../../App";

const CreateExpenseButton = ({userInfo}: {userInfo:userInfo}) => {
    const [dialogElement, setDialogElement] = useState<HTMLElement|HTMLDialogElement|null>(null)

    useEffect(() => {
        setDialogElement(() => document.getElementById('expense-modal'))
    }, [])

    const handleClick = (element) => {
        element.showModal()
    }

    return (
        <>
            <button 
                className="btn btn-primary font-medium gap-0"
                onClick={()=>handleClick(dialogElement)}
            >
                <MdOutlineAttachMoney /> Add Expense
            </button>
            <dialog id="expense-modal" className="modal">
                <ExpenseDialog userInfo={userInfo}/>
            </dialog>

        </>
    )
}

export default CreateExpenseButton