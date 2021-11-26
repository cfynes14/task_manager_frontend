import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./loginBox.scss";
import { setTokenSourceMapRange } from "typescript";

interface LoginParams {
  email: string;
  password: string;
}

interface LoginInterface {
  handleTokens: (token: string) => void;
  // history: string[];
}

// async function loginUser(credentials: LoginParams) {
//   console.log(credentials);
//   return fetch("https://fynes-task-manager.herokuapp.com/users/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

async function loginUser(credentials: LoginParams) {
  console.log("handling login");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: credentials.email,
    password: credentials.password,
  });

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "https://fynes-task-manager.herokuapp.com/users/login",
    requestOptions
  );

  return response;
}

const LoginBox = (props: LoginInterface) => {
  const { handleTokens } = props;

  const [email, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response: any = await loginUser({
      email,
      password,
    });
    console.log(response);

    if (response.status === 200) {
      const json = await response.json();
      handleTokens(json.token);
      console.log(json);
      console.log("logged in");
    } else {
      console.log("no login");
    }
  };

  return (
    <div className="loginWrapper">
      <h2 className="title">Login</h2>
      <p className="newSignup">
        New user? <Link to="/new_user">Sign up here</Link>
      </p>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="boxElement">Username:</label>
        <input
          className=" boxElement"
          type="text boxElement"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
        ></input>
        <label className="boxElement">Password:</label>
        <input
          className="boxElement"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button className="boxElement loginButton" type="submit">
          Login
        </button>
        <button
          className="boxElement loginButton"
          onClick={(e) => e.preventDefault}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default LoginBox;
