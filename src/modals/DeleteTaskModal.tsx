import deleteTask from "../utils/api/deleteTask";

interface DeleteModalInterface {
  taskDescription: string;
  taskId: string;
  closeDeleteModal: () => void;
  setTasks: any;
}

const DeleteTaskModal = (props: DeleteModalInterface) => {
  const { taskId, taskDescription, closeDeleteModal, setTasks } = props;

  const handleDelete = async () => {
    const res = await deleteTask(
      taskId,
      window.sessionStorage.getItem("token")
    );

    if (res && res.status === 200) {
      closeDeleteModal();
      setTasks();
    }

    console.log(res);
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
