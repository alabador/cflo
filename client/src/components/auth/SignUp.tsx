import React, { useEffect, useState } from 'react'
import {auth} from '../../config/firebase'
import { FaGoogle } from 'react-icons/fa'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import SignInWithGoogle from './SignInWithGoogle'
import axios from 'axios'

const SignUp = ({tokenValue, authStatus, isAuthenticated}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const createUser = async (token:string) => {
        const response = await axios.post("http://localhost:3000/home", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        // console.log(response.data);
        return response.data
    };

    // useEffect(() => {
    //     if (tokenValue) {
    //         createUser(tokenValue);
    //     }
    // }, [tokenValue]);

    const handleEmail = (e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePassword = (e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    
    const signUp = (e : React.FormEvent) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            userCredential.user.getIdToken()
            .then((tkn) => {
                tokenValue(tkn)
                authStatus(true)
                createUser(tkn)
                window.sessionStorage.setItem("token", tkn)
                window.sessionStorage.setItem("auth", "true")
                navigate('/home')
            })
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
                    <SignInWithGoogle tokenValue={tokenValue} authStatus={authStatus}/>
                </div>
            </form>
        </div>
    )
}

export default SignUp