import { MdOutlineAttachMoney } from "react-icons/md";
import ExpenseDialog from "./ExpenseDialog";

const CreateExpenseButton = () => {
    const element = document.getElementById('expense-modal')

    const handleClick = (element) => {
        if (element !== null) {
            element.showModal()
        }
    }

    return (
        <>
            <button 
                className="btn btn-primary font-medium gap-0"
                onClick={()=>handleClick(element)}
            >
                <MdOutlineAttachMoney /> Add Expense
            </button>
            <ExpenseDialog />
        </>
    )
}

export default CreateExpenseButton