import { useState } from "react"
import { userInfo } from "../../App"
import ExpenseForm from "./ExpenseForm"

interface Data {
    userId: string,
    expenseName: string,
    expensePrice: number,
    expenseCategory: string,
    expenseDescription: string,
    isExpense: boolean,
    date: Date
}

const ExpenseDialog = ({userInfo, close}: {userInfo:userInfo, close}) => {
    const [formData, setFormData] = useState({
        userId: userInfo.userId,
        expenseName: "",
        expensePrice: 0,
        expenseCategory: "",
        expenseDescription: "",
        isExpense: true,
        date: new Date()
    })

    const handleClick = (data: Data) => {
        setFormData({
            ...formData,
            userId: data.userId,
            expenseName: data.expenseName,
            expensePrice: data.expensePrice,
            expenseCategory: data.expenseCategory,
            expenseDescription: data.expenseDescription,
            isExpense: true,
            date: data.date
        })
        close()
    }

    return (
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <ExpenseForm userInfo={userInfo} handleClick={handleClick}/>
            <div className="modal-action">
                <button 
                    className="btn btn-primary"
                    form="add-expense-form"
                    type="submit"
                    onClick={handleClick}
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