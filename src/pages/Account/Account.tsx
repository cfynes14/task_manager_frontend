import React, { useState, useEffect } from "react";

// import "./account.scss";

import { AccountStyles, ImageStyles } from "./styles";

import Modal from "react-modal";

import DeleteAccountModal from "../../modals/DeleteAccountModal";

import { useNavigate, Link } from "react-router-dom";

import { UpdateUser } from "../../utils/api/updateUser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//API functions
import getUser, { UserDataInterface } from "../../utils/api/getUser";
import updateUser from "../../utils/api/updateUser";
import addAvatar from "../../utils/api/addAvatar";
import deleteAvatar from "../../utils/api/deleteAvatar";

import blank from "../../images/blank.png";

import { UserData } from "../../utils/api/getUser";

interface AccountInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: (arg: boolean) => void;
  setIsLoading: (arg: boolean) => void;
}

const errorMessage = (error: string) => toast(error);

const Account = (props: AccountInterface) => {
  const { isLoggedIn, setIsLoggedIn, setIsLoading } = props;

  let navigate = useNavigate();
  const [userPassword, setNewUserPassword] = useState<string>("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<string>("");
  const [userDetails, setUserDetails] = useState<UserDataInterface>(
    {} as UserDataInterface
  );
  const [userName, setNewUserName] = useState<string>("");
  const [userAge, setNewUserAge] = useState<number>(0);
  const [userEmail, setNewUserEmail] = useState<string>("");

  // const [errorMessage, setErrorMessage] = useState<string>("");
  const [isDeleteAccountModalOpen, setDeleteAccountModalOpen] =
    useState<boolean>(false);
  const [userAvatarFile, setUserAvatarFile] = useState<string>("");
  const [userAvatarPath, setUserAvatarPath] = useState<string | null>("");

  const getUserDetails = async () => {
    console.log("account page setting isloading true");
    setIsLoading(true);
    const res: UserData = (await getUser()) as UserData;

    if (res) {
      console.log("account page setting is loading false");
      setIsLoading(false);
    }

    if (res.status === 200) {
      setNewUserName(res.userInfo.name);
      setNewUserAge(res.userInfo.age);
      setNewUserEmail(res.userInfo.email);
      console.log("USERAVATAR", res.userAvatar);
      // setUserAvatarPath(res.userAvatar);
      const url = process.env.REACT_APP_API_URL;
      const userId = window.sessionStorage.getItem("_id");
      res.userAvatar
        ? setUserAvatarPath(`${url}/users/${userId}/avatar`)
        : setUserAvatarPath(null);
    }
  };

  useEffect(() => {
    console.log("account using effect");
    getUserDetails();
  }, []);

  const checkPasswords = (pw1: string, pw2: string) => {
    if (pw1 === pw2) {
      return true;
    }
  };

  const handleClick = async () => {
    if (!checkPasswords(userPassword, userPasswordConfirm)) {
      errorMessage("Passwords must match!");
      return;
    }

    setIsLoading(true);

    let userResDetails: UpdateUser = {};

    //simpler way to do this?

    if (userName) {
      userResDetails.name = userName;
    }
    if (userAge) {
      userResDetails.age = userAge;
    }
    if (userEmail) {
      userResDetails.email = userEmail;
    }
    if (userPassword) {
      userResDetails.password = userPassword;
    }

    try {
      const res = await updateUser(userResDetails);
      console.log(res);
      if (res?.status !== 200) {
        errorMessage("unable to update account details");
        return;
      }
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const handleAvatarInputChange = (e: any) => {
    const avatarFile = e.target.files[0];

    setUserAvatarPath(URL.createObjectURL(e.target.files[0]));

    console.log(userAvatarPath);

    setUserAvatarFile(avatarFile);
  };

  const uploadAvatar = async () => {
    console.log("uploading avatar");
    const res = await addAvatar(userAvatarFile);
    console.log(res);
  };

  const deleteImage = async () => {
    console.log("deleting avatar");
    const res = await deleteAvatar();
    console.log(res);
  };

  const openDeleteAccountModal = () => {
    setDeleteAccountModalOpen(true);
  };

  const closeDeleteAccountModal = () => {
    setDeleteAccountModalOpen(false);
  };

  const handleDeleteAccount = async () => {
    openDeleteAccountModal();
  };

  if (!isLoggedIn) {
    return (
      <h1>
        Please <Link to="/">login</Link>
      </h1>
    );
  }
  return (
    <div>
      <AccountStyles>
        <ToastContainer />
        <h1>Account</h1>
        <div className="accountContainer">
          <ImageStyles>
            <img
              className="avatar"
              src={userAvatarPath ? userAvatarPath : blank}
            />
            <label className="boxElement">Upload avatar</label>
            <input
              id="avatar"
              name="avatar"
              className="boxElement"
              type="file"
              accept=""
              onChange={handleAvatarInputChange}
            />
            <button onClick={uploadAvatar}>Upload</button>
            <button onClick={deleteImage}>Delete Avatar</button>
          </ImageStyles>
          <h2 className="title">Edit your details</h2>
          <button onClick={handleDeleteAccount}>Delete account</button>
          <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
            <label className="boxElement">Full Name:</label>
            <input
              id="userName"
              className=" boxElement"
              type="text"
              value={userName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewUserName(e.target.value)
              }
            ></input>
            <label className="boxElement">Age:</label>
            <input
              id="userAge"
              className=" boxElement"
              type="number"
              value={userAge ? userAge : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewUserAge(parseInt(e.target.value))
              }
            ></input>
            <label className="boxElement">Email:</label>
            <input
              id="userEmail"
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
            <Link to="/" onClick={handleClick}>
              <button className="boxElement loginButton">Cancel</button>
            </Link>
          </form>
          <p>{errorMessage}</p>
        </div>
      </AccountStyles>
      <Modal isOpen={isDeleteAccountModalOpen}>
        <DeleteAccountModal
          closeDeleteAccountModal={closeDeleteAccountModal}
          setIsLoggedIn={setIsLoggedIn}
        />
      </Modal>
    </div>
  );
};

export default Account;
