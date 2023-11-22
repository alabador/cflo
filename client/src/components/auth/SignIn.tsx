import React, { useState } from 'react'
import {auth} from '../../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider();

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePassword = (e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    
    const signIn = (e : React.FormEvent) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })
    }

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential:any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

    return (
        <div>
            <form onSubmit={signIn}>
                <h1>Log In</h1>
                <input 
                    value={email} onChange={handleEmail}
                    type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" 
                />
                <input 
                    value={password} onChange={handlePassword}
                    type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" 
                />
                <button className="btn" type='submit'>Sign In</button>
            </form>
            <button className='btn' onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignIn