import React, { useState, useEffect } from "react";

import "./account.scss";

import Modal from "react-modal";

import DeleteAccountModal from "../../modals/DeleteAccountModal";

import { useNavigate, Link } from "react-router-dom";

import { UpdateUser } from "../../utils/api/updateUser";

import getUser from "../../utils/api/getUser";
import updateUser from "../../utils/api/updateUser";
import addAvatar from "../../utils/api/addAvatar";

import blank from '../../images/blank.png'

// const blankAvatar = '../../../images/blank.png'

interface AccountInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: (arg: boolean) => void;
}

const Account = (props: AccountInterface) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  let navigate = useNavigate();

  const [userName, setNewUserName] = useState<string>("");
  const [userAge, setNewUserAge] = useState<number>(0);
  const [userEmail, setNewUserEmail] = useState<string>("");
  const [userPassword, setNewUserPassword] = useState<string>("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isDeleteAccountModalOpen, setDeleteAccountModalOpen] =
    useState<boolean>(false);
  const [userAvatarFile, setUserAvatarFile] = useState<string | undefined>(undefined);
  const [userAvatarPath, setUserAvatarPath] = useState<string>("");

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
  }, []);

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

    let userDetails: UpdateUser = {};

    //simpler way to do this?

    if (userName) {
      userDetails.name = userName;
    }
    if (userAge) {
      userDetails.age = userAge;
    }
    if (userEmail) {
      userDetails.email = userEmail;
    }
    if (userPassword) {
      userDetails.password = userPassword;
    }

    try {
      const res = await updateUser(userDetails);
      console.log(res);
      if (res && res.status === 200) {
        navigate("/");
      }
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

  const uploadImage = async () => {
    console.log("uploading image");
    // const res = await addAvatar(userAvatar.files[0]);
    // console.log(res);
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
    <div className="loginBox">
      <h2 className="title">Edit your details</h2>
      <button onClick={handleDeleteAccount}>Delete account</button>
      <label className="boxElement">Upload avatar</label>
      <input
        id="avatar"
        name="avatar"
        className="boxElement"
        type="file"
        accept=""
        onChange={handleAvatarInputChange}
      />
      <button onClick={uploadImage}>Upload</button>
      <img className="avatar" src={
        userAvatarPath ? userAvatarPath : blank} />
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
          value={userAvatarPath}
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
