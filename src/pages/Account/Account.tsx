import React, { useState, useEffect, useCallback } from "react";
// import "./account.scss";

import { AccountStyles, ImageStyles } from "./styles";

import Modal from "react-modal";

//components
import { Loader } from "../../utils/loader/Loader";

// modals
import DeleteAccountModal from "../../modals/DeleteAccountModal";
import DeleteAvatarModal from "../../modals/DeleteAvatarModal";

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

//error message functionality
const errorMessage = (error: string) => toast(error);

const Account = (props: AccountInterface) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  let navigate = useNavigate();
  const [userPassword, setNewUserPassword] = useState<string>("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<string>("");
  const [userDetails, setUserDetails] = useState<UserDataInterface>(
    {} as UserDataInterface
  );
  const [userName, setNewUserName] = useState<string>("");
  const [userAge, setNewUserAge] = useState<number>(0);
  const [userEmail, setNewUserEmail] = useState<string>("");

  const [isDeleteAccountModalOpen, setDeleteAccountModalOpen] =
    useState<boolean>(false);
  const [isDeleteAvatarModalOpen, setDeleteAvatarModalOpen] =
    useState<boolean>(false);
  const [userAvatarFile, setUserAvatarFile] = useState<string>("");
  const [userAvatarPath, setUserAvatarPath] = useState<string | undefined>("");

  const [isComponentLoading, setIsComponentLoading] = useState<boolean>(true);

  const getUserDetails = async () => {
    const res: UserData = (await getUser()) as UserData;

    if (res.status === 200) {
      setNewUserName(res.userInfo.name);
      setNewUserAge(res.userInfo.age);
      setNewUserEmail(res.userInfo.email);
      const url = process.env.REACT_APP_API_URL;
      let userId = window.sessionStorage.getItem("_id");

      if (userId?.includes('"')) {
        userId = userId.substr(1, userId.length - 2);
      }

      res.userAvatar
        ? setUserAvatarPath(`${url}/users/${userId}/avatar`)
        : setUserAvatarPath(undefined);
      setIsComponentLoading(false);
    }
  };

  useEffect(() => {
    console.log("account using effect");
    const img = new Image();
    // img.src = src as string;

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
      if (res && res.status !== 200) {
        errorMessage("unable to update account details");
        return;
      }
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const openDeleteAccountModal = () => {
    setDeleteAccountModalOpen(true);
  };

  const closeDeleteAccountModal = () => {
    setDeleteAccountModalOpen(false);
  };

  const openDeleteAvatarModal = () => {
    setDeleteAvatarModalOpen(true);
  };

  const closeDeleteAvatarModal = () => {
    setDeleteAvatarModalOpen(false);
  };

  const handleDeleteAccount = async () => {
    openDeleteAccountModal();
  };

  const handleAvatarInputChange = (e: any) => {
    const avatarFile = e.target.files[0];

    setUserAvatarPath(
      URL.createObjectURL(e.target.files[0]).replaceAll('"', "")
    );

    console.log(userAvatarPath);

    setUserAvatarFile(avatarFile);
  };

  const onAvatarLoad = async () => {
    // setHasAvatarLoaded(true);
    console.log(userAvatarPath);
    const createNewImage = () => {};
    setIsComponentLoading(false);
  };

  const uploadAvatar = async () => {
    console.log("uploading avatar");
    const res = await addAvatar(userAvatarFile);
    if (res?.status === 200) {
      toast("Your avatar has been uploaded");
    } else {
      toast("Unable to upload your avatar");
    }
  };

  const handleDeleteAvatar = async () => {
    const originalAvatarPath = userAvatarPath;
    setUserAvatarPath(undefined);
    closeDeleteAvatarModal();

    const res = await deleteAvatar();

    if (res && res.status !== 200) {
      setUserAvatarPath(originalAvatarPath);
      toast("Cannot delete avatar, try again later");
    }
  };

  if (!isLoggedIn) {
    return (
      <h1>
        Please <Link to="/">login</Link>
      </h1>
    );
  }

  const AccountPage = () => {
    return (
      <>
        <div className="accountContainer">
          <ImageStyles>
            {userAvatarPath ? (
              <img className="avatar" src={userAvatarPath} />
            ) : (
              <img className="avatar" src={blank} />
            )}

            <label className="boxElement">Upload avatar</label>
            <input
              id="avatar"
              name="avatar"
              className="boxElement"
              type="file"
              accept=""
              onChange={handleAvatarInputChange}
            />
            <div className="button-container">
              <button onClick={uploadAvatar}>Upload</button>
              <button onClick={openDeleteAvatarModal}>Delete Avatar</button>
            </div>
          </ImageStyles>
          <h2 className="title">Edit your details</h2>
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
            <div className="button-container">
              <button className="boxElement loginButton" onClick={handleClick}>
                Update
              </button>
              <Link to="/" onClick={handleClick}>
                <button className="boxElement loginButton">Cancel</button>
              </Link>
              <button className="delete-button" onClick={handleDeleteAccount}>
                Delete account
              </button>
            </div>
          </form>
          <p>{errorMessage}</p>
        </div>
      </>
    );
  };

  return (
    <div>
      <main>
        <AccountStyles>
          <h1>Account</h1>
          <ToastContainer />
          <Loader
            WrappedComponent={AccountPage}
            isComponentLoading={isComponentLoading}
          />
        </AccountStyles>
      </main>

      <Modal isOpen={isDeleteAccountModalOpen} className="modal">
        <DeleteAccountModal
          closeDeleteAccountModal={closeDeleteAccountModal}
          setIsLoggedIn={setIsLoggedIn}
        />
      </Modal>
      <Modal isOpen={isDeleteAvatarModalOpen} className="modal">
        <DeleteAvatarModal
          closeDeleteAvatarModal={closeDeleteAvatarModal}
          handleDeleteAvatar={handleDeleteAvatar}
        />
      </Modal>
    </div>
  );
};

export default Account;
