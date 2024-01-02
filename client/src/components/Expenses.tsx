import axios from "axios";
import { useEffect, useState } from "react";

interface Expense {
    expense_name : string,
    expense_price : number,
    expense_category : string,
    expense_description : string,
    is_expense: boolean,
    date: string
    
}

const Expenses = ({token}: {token: string|null} ) => {
    const [expenses, setExpenses] = useState<Array<Expense>>([]);

    const fetchData = async (token:string) => {
        const response = await axios.get("http://localhost:3000/home", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setExpenses(response.data.expenses);
        // console.log(response.data);
        return response.data
    };

    useEffect(() => {
        if (token) {
            fetchData(token);
        }
    }, [token]);

    return (
        <>
            {expenses.map((expense, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-md py-4 my-4">
                    <p>{expense.expense_name}</p>
                    <p>{expense.expense_price}</p>
                    <p>{expense.expense_category}</p>
                    <p>{expense.expense_description}</p>
                    <p>{expense.date}</p>
                </div>
            ))}
        </>
    );
};

export default Expenses;
