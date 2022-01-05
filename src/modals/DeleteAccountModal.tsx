import deleteAccount from "../utils/api/deleteAccount";
import { useNavigate, Link } from "react-router-dom";

interface DeleteAccountInterface {
  closeDeleteAccountModal: () => void;
}

const DeleteAccountModal = (props: DeleteAccountInterface) => {
  const navigate = useNavigate();

  const { closeDeleteAccountModal } = props;

  const handleDeleteAccount = async () => {
    const res = await deleteAccount();
    if (res && res.status === 200) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>
        Are you sure you want to delete your account and all associated data?
        You cannot undo this!
      </h1>
      <button onClick={handleDeleteAccount}>Yes</button>
      <button onClick={closeDeleteAccountModal}>No</button>
    </div>
  );
};

export default DeleteAccountModal;