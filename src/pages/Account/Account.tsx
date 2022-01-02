import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { UserInterface } from "../../components/NewUserForm/NewUserForm";

import getUser from "../../utils/api/getUser";

const Account = () => {
  const [userName, setNewUserName] = useState<string>("");
  const [userAge, setNewUserAge] = useState<number>(0);
  const [userEmail, setNewUserEmail] = useState<string>("");
  const [userPassword, setNewUserPassword] = useState<string>("");

  console.log("opening account page");

  const getUserDetails = async () => {
    const res = getUser();
    console.log(res);
  };

  useEffect(() => {
    getUserDetails();
  });

  const handleClick = async () => {
    console.log("handling");
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

export default Account;
