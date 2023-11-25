import SignOut from "../components/auth/SignOut"
import {auth} from '../config/firebase'

const Home = () => {
    const user = auth.currentUser
    return (
        <main className='w-full min-h-screen flex flex-col justify-center items-center'>
            <p>{`Signed In as ${user.email}`}</p>
            <SignOut />
        </main>
    )
}

export default Home