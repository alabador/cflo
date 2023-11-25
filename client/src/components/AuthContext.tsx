import { createContext, useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import {auth} from '../config/firebase'

// interface Context {
//     user: any,
//     setAuthUser: any 
// }

// export const Context = createContext({})
export const Context = createContext({
    user: null,
    setAuthUser: null
})

const AuthContext = ({children}) => {
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            if (currentUser) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              setAuthUser(currentUser)
            } else {
              // User is signed out
              setAuthUser(null)
            }
        });
    
        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [])
    
    const values = {
        user: authUser,
        setAuthUser: setAuthUser
    }

    return (
        <Context.Provider value={values}> 
            {!loading && children}
        </Context.Provider>
    )
}

export default AuthContext