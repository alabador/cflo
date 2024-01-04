import axios from "axios";
import { useEffect, useState } from "react";
import ExpenseCard from "./expense/ExpenseCard";
import { userInfo } from "../App";

export interface Expense {
    expense_name : string,
    expense_price : number,
    expense_category : string,
    expense_description : string,
    is_expense: boolean,
    date: string
    
}

const Expenses = ({token, userInfo}: {token: string|null, userInfo:userInfo} ) => {
    const [expenses, setExpenses] = useState<Array<Expense>>([]);

    const fetchData = async (token:string, userId:string) => {
        const response = await axios.get("http://localhost:3000/home", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {userId : userId}
        });
        setExpenses(response.data.expenses);
        // console.log(response.data);
        return response.data
    };

    useEffect(() => {
        if (token) {
            fetchData(token, userInfo.userId);
        }
    }, [token]);

    return (
        <div className="w-3/4">
            {expenses.map((expense, index) => (
                <ExpenseCard key={index} expense={expense}/>
            ))}
        </div>
    );
};

export default Expenses;
