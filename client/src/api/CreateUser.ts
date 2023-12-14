import axios from "axios";

const createUser = async (token:string) => {
    const response = await axios.post("http://localhost:3000/home", {}, {
        headers: {
            'authorization': 'Bearer ' + token
        }
    });
    return response.data
};

export default createUser