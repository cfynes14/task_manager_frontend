import React from 'react';
import { useState } from 'react';
import  { Link }  from 'react-router-dom';
import axios from 'axios';
import './loginBox.scss'

interface LoginBoxParams {
   
  }

interface LoginInterface {
    handleTokens: (token: string) => void
}

const LoginBox = (props: LoginInterface) => {

    const { handleTokens } = props

const [userName, setUserName] = useState<string>('')
const [password, setPassword] = useState<string>('')

const handleLogin = () => {
    console.log('handling login')

    var data = JSON.stringify({
        "email": userName,
        "password": password
      });
      
      var config: any = {
        method: 'post',
        url: 'https://fynes-task-manager.herokuapp.com/users/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      console.log(data)

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        handleTokens(response.data.token)
      })
      .catch(function (error) {
        console.log(error);
      });
}

    return(
        <div className="loginBox">
            <h2 className="title">Login</h2>
            <p className="newSignup">New user? <Link to="/new_user">Sign up here</Link></p>
            <form className="loginForm" onSubmit={e => e.preventDefault()}>
                <label className="boxElement">Username:</label>
                <input className=" boxElement" type="text boxElement" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}></input>
                <label className="boxElement">Password:</label>
                <input className="boxElement" type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <button className="boxElement loginButton" type="submit" onClick={handleLogin}>Login</button>
                <button className="boxElement loginButton" onClick={e => e.preventDefault}>Cancel</button>
            </form>
        </div>
    )
}

export default LoginBox;