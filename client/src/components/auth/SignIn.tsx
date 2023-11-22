import React, { useState } from "react";
import { auth } from "../../config/firebase";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";


const provider = new GoogleAuthProvider();

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);

    const signIn = (e: React.FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: any =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
            });
    };

    return (
        <div>
            <form className="card-body" onSubmit={signIn}>
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
                <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
{/* 
            <form onSubmit={signIn}>
                <h1>Log In</h1>
                <input
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    value={password}
                    onChange={handlePassword}
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                />
                <button className="btn" type="submit">
                    Sign In
                </button>
            </form> */}
            <div className="divider">OR</div>
            <div className="flex justify-center p-8">
                <button className="btn btn-secondary w-full" onClick={signInWithGoogle}>
                    Sign in with Google <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SignIn;
