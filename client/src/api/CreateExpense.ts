import axios from "axios";
import { Data } from "../components/expense/ExpenseDialog";

const createExpense = async (data: Data) => {
    const response = await axios.post("http://localhost:3000/home/add", {
        ...data
    });
    console.log(response.data)
    return response.data
};

export default createExpense