import deleteAvatar from "../utils/api/deleteAvatar";

import ModalStyles from "./ModalStyles";

interface DeleteAvatarModalInterface {
  handleDeleteAvatar: () => void;
  closeDeleteAvatarModal: () => void;
}

const DeleteAvatarModal = (props: DeleteAvatarModalInterface) => {
  const { closeDeleteAvatarModal, handleDeleteAvatar } = props;

  return (
    <ModalStyles>
      <div className="modal-conatainer">
        <h1>Delete task</h1>
        <p>Are you sure you want to delete your avatar?</p>
        <button onClick={handleDeleteAvatar}>Confirm</button>
        <button onClick={closeDeleteAvatarModal}>Cancel</button>
      </div>
    </ModalStyles>
  );
};

export default DeleteAvatarModal;
