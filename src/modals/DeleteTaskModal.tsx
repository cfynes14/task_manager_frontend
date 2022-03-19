import deleteTask from "../utils/api/deleteTask";

import ModalStyles from "./ModalStyles";

interface DeleteModalInterface {
  taskDescription: string;
  taskId: string;
  closeDeleteModal: () => void;
  handleTasksChange: any;
}

const DeleteTaskModal = (props: DeleteModalInterface) => {
  const { taskId, taskDescription, closeDeleteModal, handleTasksChange } =
    props;

  const handleDelete = async () => {
    const res = await deleteTask(
      taskId,
      window.sessionStorage.getItem("token")
    );

    if (res && res.status === 200) {
      handleTasksChange();
      closeDeleteModal();
    }

    console.log(res);
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
