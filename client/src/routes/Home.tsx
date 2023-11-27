import Expenses from "../components/Expenses"
import SignOut from "../components/auth/SignOut"
import {auth} from '../config/firebase'

const Home = ({token}: {token: string}) => {
    const user = auth.currentUser

    return (
        <main className='w-full min-h-screen flex flex-col justify-center items-center'>
            <p>{`Signed In as ${user.email}`}</p>
            <Expenses token={token}/>
            <SignOut />
        </main>
    )
}

export default Home