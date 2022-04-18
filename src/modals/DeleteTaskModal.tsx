import deleteTask from "../utils/api/deleteTask";

import ModalStyles from "./ModalStyles";

interface DeleteModalInterface {
  taskDescription: string;
  taskId: string;
  closeDeleteModal: () => void;
  handleDeleteTask: () => void;
}

const DeleteTaskModal = (props: DeleteModalInterface) => {
  const { taskId, taskDescription, closeDeleteModal, handleDeleteTask } = props;

  const handleDelete = async () => {
    handleDeleteTask();
    closeDeleteModal();
  };

  return (
    <ModalStyles>
      <h1>Delete task</h1>
      <p>Are you sure you want to delete {taskDescription} ?</p>
      <button onClick={handleDelete}>Confirm</button>
      <button onClick={closeDeleteModal}>Cancel</button>
    </ModalStyles>
  );
};

export default DeleteTaskModal;
