import React, { useState } from "react";
import {signInWithGoogle, signInWithLogin } from "../../config/firebase";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);

    const signIn = (e: React.FormEvent) => {
        e.preventDefault();
        signInWithLogin(email, password)
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
                <div className="form-control gap-4 mt-6">
                    <button className="btn btn-primary" type="submit">Login</button>
                    <button type="button" className="btn btn-secondary w-full" onClick={signInWithGoogle}>
                        Sign in with Google <FaGoogle />
                    </button>
                </div>
            </form>

        </div>
    );
};

export default SignIn;
