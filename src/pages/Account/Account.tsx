import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { UserInterface } from "../../components/NewUserForm/NewUserForm";

import getUser from "../../utils/api/getUser";

interface AccountInterface {
  isLoggedIn: boolean;
}

const Account = (props: AccountInterface) => {
  const { isLoggedIn } = props;

  const [userName, setNewUserName] = useState<string>("");
  const [userAge, setNewUserAge] = useState<number>(0);
  const [userEmail, setNewUserEmail] = useState<string>("");
  const [userPassword, setNewUserPassword] = useState<string>("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  console.log("opening account page");

  const getUserDetails = async () => {
    const res = await getUser();
    console.log(res);
    setNewUserName(res.name);
    setNewUserAge(res.age);
    setNewUserEmail(res.email);
  };

  useEffect(() => {
    console.log("using effect");
    getUserDetails();
  });

  const checkPasswords = (pw1: string, pw2: string) => {
    if (pw1 === pw2) {
      return true;
    }
  };

  const handleClick = async () => {
    if (!checkPasswords(userPassword, userPasswordConfirm)) {
      setErrorMessage("Passwords must match!");
      return;
    }
  };

  if (!isLoggedIn) {
    return (
      <h1>
        Please <Link to="/">login</Link>
      </h1>
    );
  }
  return (
    <div className="loginBox">
      <h2 className="title">Edit your details</h2>

      <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
        <label className="boxElement">Full Name:</label>
        <input
          className=" boxElement"
          type="text"
          value={userName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewUserName(e.target.value)
          }
        ></input>
        <label className="boxElement">Age:</label>
        <input
          className=" boxElement"
          type="number"
          value={userAge}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewUserAge(parseInt(e.target.value))
          }
        ></input>
        <label className="boxElement">Email:</label>
        <input
          className=" boxElement"
          type="email"
          value={userEmail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewUserEmail(e.target.value)
          }
        ></input>
        <label className="boxElement">Create new password:</label>
        <input
          className="boxElement"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewUserPassword(e.target.value)
          }
        />
        <label className="boxElement">Confirm new password:</label>
        <input
          className="boxElement"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserPasswordConfirm(e.target.value)
          }
        />
        <button className="boxElement loginButton" onClick={handleClick}>
          Update
        </button>
        <Link to="/">
          <button className="boxElement loginButton">Cancel</button>
        </Link>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Account;
