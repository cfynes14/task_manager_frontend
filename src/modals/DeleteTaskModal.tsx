import deleteTask from "../utils/api/deleteTask";

interface DeleteModalInterface {
  taskDescription: string;
  taskId: string;
  closeDeleteModal: () => void;
}

const DeleteTaskModal = (props: DeleteModalInterface) => {
  const { taskId, taskDescription, closeDeleteModal } = props;

  const handleDelete = () => {
    deleteTask(taskId, window.sessionStorage.getItem("token"));
  };

  return (
    <div>
      <h1>Delete task</h1>
      <p>Are you sure you want to delete {taskDescription} ?</p>
      <button onClick={handleDelete}>Confirm</button>
      <button onClick={closeDeleteModal}>Cancel</button>
    </div>
  );
};

export default DeleteTaskModal;
