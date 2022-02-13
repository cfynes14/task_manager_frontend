import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import createNewUser from "../../utils/api/createNewUser";

import NewUserStyles from "./styles";

export interface UserInterface {
  name: String;
  age?: Number;
  email: String;
  password: String;
}

interface NewUserFormInterface {
  setIsLoading: (arg: boolean) => void;
  setIsLoggedIn: (arg: boolean) => void;
}

const NewUserForm = (props: NewUserFormInterface) => {
  const navigate = useNavigate();

  const { setIsLoading, setIsLoggedIn } = props;

  const [newUserName, setNewUserName] = useState<string>("");
  const [newUserAge, setNewUserAge] = useState<number>(0);
  const [newUserEmail, setNewUserEmail] = useState<string>("");
  const [newUserPassword, setNewUserPassword] = useState<string>("");

  const handleClick = async () => {
    setIsLoading(true);
    const userInfo: UserInterface = {
      name: newUserName,
      age: newUserAge,
      email: newUserEmail,
      password: newUserPassword,
    };

    const errorMessage = (message: string) => toast(message);

    const res = await createNewUser(userInfo);

    if (res && res.status === 201) {
      window.sessionStorage.setItem("token", res.token);
      window.sessionStorage.setItem("_id", JSON.stringify(res.data._id));

      setIsLoggedIn(true);
      setIsLoading(true);
      navigate("/");
    } else {
      console.log("unable to create user");
      errorMessage("Unable to create user");
    }
  };
  return (
    <NewUserStyles>
      <main>
        <h1>Create New Account</h1>
        <div className="newUserForm">
          <ToastContainer />
          <h2 className="title">Enter your details</h2>

          <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
            <label className="boxElement">Full Name:</label>
            <input
              className=" boxElement"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewUserName(e.target.value)
              }
            ></input>
            <label className="boxElement">Age:</label>
            <input
              className=" boxElement"
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewUserAge(parseInt(e.target.value))
              }
            ></input>
            <label className="boxElement">Email:</label>
            <input
              className=" boxElement"
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewUserEmail(e.target.value)
              }
            ></input>
            <label className="boxElement">Password:</label>
            <input
              className="boxElement"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewUserPassword(e.target.value)
              }
            />
            <button className="boxElement loginButton" onClick={handleClick}>
              Create
            </button>
            <Link to="/">
              <button
                className="boxElement loginButton"
                onClick={(e) => e.preventDefault}
              >
                Cancel
              </button>
            </Link>
          </form>
        </div>
      </main>
    </NewUserStyles>
  );
};

export default NewUserForm;
