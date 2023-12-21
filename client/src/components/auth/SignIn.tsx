import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignInWithGoogle from "./SignInWithGoogle";
import createUser from "../../api/CreateUser";

const SignIn = ({tokenValue, authStatus, userInfo}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);

    async function handleSignIn (e: React.FormEvent) {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            return userCredential.user.getIdToken()
        })
        .then((tkn) => {
            // console.log(tkn)
            tokenValue(tkn)
            authStatus(true)
            window.sessionStorage.setItem("token", tkn)
            window.sessionStorage.setItem("auth", "true")
            navigate('/home')
            return tkn
        })
        .then((tkn) => {
            const test = createUser(tkn)
            return test
        })
        .then((data) => {
            console.log(data)
            const userData = {
                userId: data.user.userId,
                email: data.user.email
            }
            userInfo(userData)
            window.sessionStorage.setItem('userInfo', JSON.stringify(userData))
        })
        .catch((error) => {
            console.log(error);
        });
        
    };


    return (
        <div>
            <form className="card-body" onSubmit={handleSignIn}>
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control gap-4 mt-6">
                    <button className="btn btn-primary" type="submit">Login</button>
                    <SignInWithGoogle tokenValue={tokenValue} authStatus={authStatus}/>
                </div>
            </form>

        </div>
    );
};

export default SignIn;
