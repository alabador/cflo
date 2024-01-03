import axios from "axios";
import { Data } from "../components/expense/ExpenseDialog";

const createExpense = async (data: Data, token) => {
    try {
        const response = await axios.post("http://localhost:3000/home/add", 
        {
            ...data
        }, 
        {
            headers: {
                'authorization': 'Bearer ' + token
            }
        }
        );
        const responseData = response.data
        // console.log(response.data)
        return responseData
    } catch (error) {
        console.error(error)
    }
};

export default createExpense