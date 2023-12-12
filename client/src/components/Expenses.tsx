import axios from "axios";
import { useEffect, useState } from "react";

interface Expense {
    title: string;
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
                <p key={index}>{expense.title}</p>
            ))}
        </>
    );
};

export default Expenses;
