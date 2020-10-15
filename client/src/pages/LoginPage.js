import React, { useState } from 'react';
import { login, loginDemo } from '../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from "react-router-dom";

import AuthButton from '../components/AuthButton';


import './auth.css'



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
        console.log("demo!")
    }

    if (currentUserToken) return <Redirect to="/map"/>;

    return (
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="errors-container">
            <ul className="errors" id="login-errors"></ul>
          </div>
          <div className="signUpLabel">

            <input
              type="text"
              className="signup"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signUpLabel">
            <input
              type="password"
              className="signup"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="buttonDiv">
            {/* <button className="authButton" type="submit" onClick={handleSubmit}>Log in</button> */}
            <AuthButton onClick={handleSubmit}> Log In </AuthButton>
          </div>
          <div className="buttonDiv">
            {/* <button className="authButton" type="submit" onClick={handleDemoSubmit}>Log in as demo user</button> */}
            <AuthButton onClick={handleDemoSubmit}>Demo Log In</AuthButton>
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