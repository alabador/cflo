import { useEffect, useState } from "react"
import Expenses from "../components/Expenses"
import SignOut from "../components/auth/SignOut"
import {auth} from '../config/firebase'
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import Navbar from "../components/home/Navbar"
import { userInfo } from "../App"

const Home = ({token, isAuthenticated, authStatus, userInfo}: 
    {token: string|null, isAuthenticated:boolean, authStatus: Function, userInfo: userInfo}) => {
    const user = auth.currentUser
    const navigate = useNavigate()
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   setAuthUser(currentUser)
                window.sessionStorage.setItem('auth', 'true')
                authStatus(true)
            } else {
              // User is signed out
            //   setAuthUser(null)
                window.sessionStorage.setItem('auth', 'false')
                authStatus(false)
            }
        });
    
        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [])

    return (
        <main className='w-full min-h-screen'>
            <Navbar userInfo={userInfo} token={token}/>
            <div className='w-full min-h-screen flex flex-col justify-center items-center'> 
                <p className="text-xl">{`Signed In as ${userInfo.email}`}</p>
                <Expenses token={token} userInfo={userInfo}/>
                <SignOut />
            </div>
        </main>
    )
}

export default Home