import deleteAccount from "../utils/api/deleteAccount";
import { useNavigate, Link } from "react-router-dom";

import ModalStyles from "./ModalStyles";

interface DeleteAccountInterface {
  closeDeleteAccountModal: () => void;
  setIsLoggedIn: (arg: boolean) => void;
}

const DeleteAccountModal = (props: DeleteAccountInterface) => {
  const navigate = useNavigate();

  const { closeDeleteAccountModal, setIsLoggedIn } = props;

  const handleDeleteAccount = async () => {
    const res = await deleteAccount();
    if (res && res.status === 200) {
      navigate("/");
    }
    setIsLoggedIn(false);
  };

  return (
    <ModalStyles>
      <h1>
        Are you sure you want to delete your account and all associated data?
        You cannot undo this!
      </h1>
      <button onClick={handleDeleteAccount}>Yes</button>
      <button onClick={closeDeleteAccountModal}>No</button>
    </ModalStyles>
  );
};

export default DeleteAccountModal;
