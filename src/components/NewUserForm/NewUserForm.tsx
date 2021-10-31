import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

interface User {
    name: String,
    Age: Number,
    email: String,
    password: String
}

const NewUserForm = () => {

    const [newUserName, setNewUserName] = useState<string>('')
    const [newUserAge, setNewUserAge] = useState<number>(0)
    const [newUserEmail, setNewUserEmail] = useState<string>('')
    const [newUserPassword, setNewUserPassword] = useState<string>('')
    
    return(
<div className="loginBox">
            <h2 className="title">Login</h2>
            
            <form className="loginForm">
                <label className="boxElement">Full Name:</label>
                <input className=" boxElement" type="text" onChange={e => setNewUserName(e.target.value)}></input>
                <label className="boxElement">Age:</label>
                <input className=" boxElement" type="number" onChange={e => setNewUserAge(parseInt(e.target.value))}></input>
                <label className="boxElement">Email:</label>
                <input className=" boxElement" type="email" onChange={e => setNewUserEmail(e.target.value)}></input>
                <label className="boxElement">Password:</label>
                <input className="boxElement" type="password" onChange={e => setNewUserPassword(e.target.value)}/>
                <button className="boxElement loginButton" type="submit" onClick={e => e.preventDefault}>Create</button>
                <Link to="/">
                <button className="boxElement loginButton" onClick={e => e.preventDefault}>Cancel</button>
                </Link>
            </form>
        </div>
    )
}


export default NewUserForm;

