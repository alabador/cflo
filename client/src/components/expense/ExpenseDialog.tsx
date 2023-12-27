import { userInfo } from "../../App"
import ExpenseForm from "./ExpenseForm"


const ExpenseDialog = ({userInfo}: {userInfo:userInfo}) => {

    const handleSubmit = () => {

    }

    return (
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <ExpenseForm userInfo={userInfo}/>
            <div className="modal-action">
                <button 
                    className="btn btn-primary"
                    form="add-expense-form"
                    onClick={() => handleSubmit()}
                >
                    Add
                </button>
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
    )
}

export default ExpenseDialog