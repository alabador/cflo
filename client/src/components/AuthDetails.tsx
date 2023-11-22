import React, {useEffect, useState} from 'react'
import {auth} from '../config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user:any) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listen()
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful')
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            {authUser ? <><p>{`Signed In as ${authUser.email}`}</p> <button className='btn' onClick={userSignOut}>Sign Out</button> </>: <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails