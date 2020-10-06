import React, { useState } from 'react';
import { login, loginDemo } from '../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from "react-router-dom";
// import './LoginPage.css'



function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const currentUserToken = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));
       
    }

    const handleDemoSubmit = e => {
        e.preventDefault();
        dispatch(loginDemo());
    }

    if (currentUserToken) return <Redirect to="/"/>;

    return (
        <div className="login-container">
            <div className="errors-container">
                <ul className="errors" id="errors"></ul>
            </div>
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="signUpLabel">
                 <label>Email
                     <input type="text" className="signup" onChange={(e) => setEmail(e.target.value)}/>
                 </label>
                </div>
                <div className="signUpLabel">
                    <label>Password
                        <input type="password" className="signup" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <div className="buttonDiv">
                <button type="submit" onClick={handleSubmit}>Log in</button>
                </div>
                <div className="buttonDiv">
                <button type="submit" onClick={handleDemoSubmit}>
                    Log in as demo user
                 </button>
                </div>
                <div className="signUpOption">
                    <span>
                        Not a member? <Link to="/signup">Sign up</Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;