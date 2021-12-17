import deleteTask from "../utils/api/deleteTask";

interface DeleteModalInterface {
  taskId: string;
}

const DeleteTaskModal = (task: DeleteModalInterface) => {
  return (
    <div>
      <h1>Delete task</h1>
      <p>Are you sure you want to delete {task}</p>
      <button>Confirm</button>
      <button>Cancel</button>
    </div>
  );
};

export default DeleteTaskModal;
