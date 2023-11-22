import React, { useState } from 'react'
import {auth} from '../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePassword = (e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    
    const signUp = (e : React.FormEvent) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <form onSubmit={signUp}>
                <h1>Create an Account</h1>
                <input 
                    value={email} onChange={handleEmail}
                    type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" 
                />
                <input 
                    value={password} onChange={handlePassword}
                    type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" 
                />
                <button className="btn" type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp