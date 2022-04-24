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
    setIsLoading(true);
    e.preventDefault();
    if(email === "" || password === ""){
      setIsLoading(false)
      return errorMessage("Please enter an email and a password")
    }
    const response: any = await loginUser({
      email,
      password,
    });
    if (response.status === 200) {
      setIsLoggedIn(true);
    } else {
      errorMessage("Either no account linked with email or incorrect password");
      setIsLoading(false)
    }
    console.log(response);
  };

  return (
    <div className="loginWrapper">
      <ToastContainer />
      <LoginForm>
        <div>
          <h2 className="title">Login</h2>
          <p className="newSignup">
            New user? <Link to="/new_user">Sign up here</Link>
          </p>
          <form className="loginForm" onSubmit={handleSubmit}>
            <label className="boxElement">Username:</label>
            <input
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
            ></input>
            <label>Password:</label>
            <input
              className="boxElement"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <button type="submit">
              Login
            </button>
            <button
              onClick={(e) => e.preventDefault}
            >
              Cancel
            </button>
          </form>
        </div>
      </LoginForm>
    </div>
  );
};

export default LoginBox;
