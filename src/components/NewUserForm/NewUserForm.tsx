import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface User {
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
    console.log("handling");
    const userInfo: User = {
      name: newUserName,
      age: newUserAge,
      email: newUserEmail,
      password: newUserPassword,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: userInfo.name,
      age: userInfo.age,
      email: userInfo.email,
      password: userInfo.password,
    });

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://fynes-task-manager.herokuapp.com/users", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
