import React, { useState } from "react";
import { signup } from "../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import authButton from '../components/AuthButton';

import './auth.css'
import AuthButton from "../components/AuthButton";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.auth.id);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(username, email, password));
  };

  if (currentUserId) return <Redirect to="/" />;

  return (
    <>
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="errors-container">
            <ul className="errors" id="sign-up-errors"></ul>
          </div>
          <div className="buttonDiv">
            <div className="signUpLabel">
              <input
                type="text"
                className="signup"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="buttonDiv">
            <div className="signUpLabel">
              <input
                type="text"
                className="signup"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="buttonDiv">
            <div className="signUpLabel">
              <input
                type="password"
                className="signup"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="buttonDiv">
            <AuthButton onClick={handleSubmit}>Sign Up</AuthButton>
            {/* <button
              className="authButton"
              type="submit"
              onClick={handleSubmit}
            >Sign Up</button> */}
            <div className="signUpOption">
              <span>
                Already a member? <Link to="/login">Log In</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupPage;
