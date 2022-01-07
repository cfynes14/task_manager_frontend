import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import createNewUser from "../../utils/api/createNewUser";

export interface UserInterface {
  name: String;
  age?: Number;
  email: String;
  password: String;
}

const NewUserForm = () => {
  const [newUserName, setNewUserName] = useState<string>("");
  const [newUserAge, setNewUserAge] = useState<number>(0);
  const [newUserEmail, setNewUserEmail] = useState<string>("");
  const [newUserPassword, setNewUserPassword] = useState<string>("");

  const handleClick = async () => {
    const userInfo: UserInterface = {
      name: newUserName,
      age: newUserAge,
      email: newUserEmail,
      password: newUserPassword,
    };

    createNewUser(userInfo);
  };
  return (
    <div className="loginBox">
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
  );
};

export default NewUserForm;
