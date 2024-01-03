import { MdOutlineAttachMoney } from "react-icons/md";
import ExpenseDialog from "./ExpenseDialog";
import { useEffect, useState } from "react";
import { userInfo } from "../../App";

const CreateExpenseButton = ({userInfo, token}: {userInfo:userInfo, token}) => {
    const [dialogElement, setDialogElement] = useState<HTMLElement|HTMLDialogElement|null>(null)

    useEffect(() => {
        setDialogElement(() => document.getElementById('expense-modal'))
    }, [])

    const handleClick = (element) => {
        element.showModal()
    }

    const closeDialog = (element) => {
        // dialogElement!.close()
        element.close()
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
                <ExpenseDialog 
                    userInfo={userInfo} 
                    close={closeDialog} 
                    dialogElement={dialogElement}
                    token={token}
                />
            </dialog>

        </>
    )
}

export default CreateExpenseButton