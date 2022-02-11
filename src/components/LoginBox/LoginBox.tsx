import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./loginBox.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginForm from "./styles";

import loginUser from "../../utils/api/loginUser";

interface LoginInterface {
  setIsLoggedIn: (arg: boolean) => void;
  setIsLoading: (arg: boolean) => void;
}

const LoginBox = (props: LoginInterface) => {
  const { setIsLoggedIn, setIsLoading } = props;

  const [email, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const errorMessage = (error: string) => toast(error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response: any = await loginUser({
      email,
      password,
    });
    if (response.status === 200) {
      setIsLoggedIn(true);
    } else {
      errorMessage("unable to login");
    }
    console.log(response);
  };

  return (
    <div className="loginWrapper">
      <ToastContainer />
      <LoginForm>
        <h2 className="title">Login</h2>
        <p className="newSignup">
          New user? <Link to="/new_user">Sign up here</Link>
        </p>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label className="boxElement">Username:</label>
          <input
            className=" boxElement"
            type="email"
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
      </LoginForm>
    </div>
  );
};

export default LoginBox;
