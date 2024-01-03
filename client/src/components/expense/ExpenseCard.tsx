import { Expense } from "../Expenses"

const ExpenseCard = ({expense} : {expense: Expense}) => {
    return (
        // <div className="card w-full bg-base-100 shadow-md p-8 my-4">
        //     <p>{expense.expense_name}</p>
        //     <p>{expense.expense_price}</p>
        //     <p>{expense.expense_category}</p>
        //     <p>{expense.expense_description}</p>
        //     <p>{expense.date}</p>
        // </div>

        <div className="collapse bg-neutral w-full p-4 my-4">
            <input type="checkbox" /> 
            <div className="collapse-title text-md font-medium">
                <p>{expense.expense_name}</p>
                <p>{expense.expense_price}</p>
                <p>{expense.date}</p>
            </div>
            <div className="collapse-content">
                <p>{expense.expense_category}</p>
                <p>{expense.expense_description}</p>
            </div>
        </div>
    )
}

export default ExpenseCard