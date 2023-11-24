import React, { useState } from 'react'
import {auth, signInWithGoogle} from '../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FaGoogle } from 'react-icons/fa'

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
            <form className="card-body" onSubmit={signUp}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <div className="form-control gap-4 mt-6">
                    <button className="btn btn-primary" type="submit">Create an Account</button>
                    <button type="button" className="btn btn-secondary w-full" onClick={signInWithGoogle}>
                        Sign in with Google <FaGoogle />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp