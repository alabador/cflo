import { signOut } from "firebase/auth"
import {auth} from '../../config/firebase'
import { useNavigate } from "react-router-dom"

const SignOut = () => {
    const navigate = useNavigate()
    async function handleSignOut() {
        try {
            await signOut(auth)
            sessionStorage.setItem("token", "")
            sessionStorage.setItem("userInfo", JSON.stringify({
                userId: '',
                email: ''
            }))
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={() => handleSignOut()}>
                Sign Out
            </button>
        </div>
    )
}

export default SignOut