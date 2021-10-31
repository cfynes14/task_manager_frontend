import React from 'react';
import  { Link }  from 'react-router-dom';
import './loginBox.scss'

const LoginBox = () => {
    return(
        <div className="loginBox">
            <h2 className="title">Login</h2>
            <p className="newSignup">New user? <Link to="/new_user">Sign up here</Link></p>
            <form className="loginForm">
                <label className="boxElement">Username:</label>
                <input className=" boxElement" type="text boxElement"></input>
                <label className="boxElement">Password:</label>
                <input className="boxElement" type="password boxElement" />
                <button className="boxElement loginButton" type="submit" onClick={e => e.preventDefault}>Login</button>
                <button className="boxElement loginButton" onClick={e => e.preventDefault}>Cancel</button>
            </form>
        </div>
    )
}

export default LoginBox;