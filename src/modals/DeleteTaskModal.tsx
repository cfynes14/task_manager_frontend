import deleteTask from "../utils/api/deleteTask";

interface DeleteModalInterface {
  taskDescription: string;
  taskId: string;
}

const DeleteTaskModal = (props: DeleteModalInterface) => {
  const { taskId, taskDescription } = props;

  return (
    <div>
      <h1>Delete task</h1>
      <p>Are you sure you want to delete {taskDescription} ?</p>
      <button>Confirm</button>
      <button>Cancel</button>
    </div>
  );
};

export default DeleteTaskModal;
