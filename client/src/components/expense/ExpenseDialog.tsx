import { useState } from "react"
import { userInfo } from "../../App"
import ExpenseForm from "./ExpenseForm"
import createExpense from "../../api/CreateExpense"

export interface Data {
    userId: string,
    expenseName: string,
    expensePrice: number,
    expenseCategory: string,
    expenseDescription: string,
    isExpense: boolean,
    date: string
}

const ExpenseDialog = ({userInfo, close, dialogElement, token}: {userInfo:userInfo, close, dialogElement, token}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [isExpense, setIsExpense] = useState(true)

    const handleClick = async (data: Data) => {
        createExpense(data, token)
        close(dialogElement)
    }

    const resetForm = () => {
        close(dialogElement)
        setName('')
        setPrice(0)
        setCategory('')
        setDescription('')
        setDate('')
        setIsExpense(true)
    }

    return (
        <div className="modal-box">
            <ExpenseForm 
                userInfo={userInfo} 
                handleClick={handleClick}
                name={name} setName={setName}
                price={price} setPrice={setPrice}
                category={category} setCategory={setCategory}
                description={description} setDescription={setDescription}
                date={date} setDate={setDate}
                isExpense={isExpense} setIsExpense={setIsExpense}
            />
            <div className="modal-action">
                <button 
                    className="btn btn-primary"
                    form="add-expense-form"
                    type="submit"
                    onClick={() => handleClick}
                >
                    Add
                </button>
                <button className="btn" onClick={() => resetForm()}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default ExpenseDialog