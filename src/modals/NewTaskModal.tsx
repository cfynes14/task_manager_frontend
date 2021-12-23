import { useState, useEffect } from "react";

import getTasks from "../utils/api/getTasks";
import createTask from "../../src/utils/api/createTask";

import { TaskParams } from "../components/Task/Task";

interface NewTaskModalProps {
  closeNewTaskModal: any;
  handleTasksChange: any;
}

//React.MouseEventHandler<HTMLButtonElement>

const NewTaskModal = ({
  closeNewTaskModal,
  handleTasksChange,
}: NewTaskModalProps) => {
  const [description, setDescription] = useState<string>("");
  const [completed, setComplete] = useState<boolean>(false);

  const handleClick = async () => {
    const taskParams = {
      description,
      completed,
    };
    const res = await createTask(taskParams);
    if (res.status === 201) {
      handleTasksChange();
      closeNewTaskModal();
    }
  };

  return (
    <div>
      <h1>Create New Task</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Description</label>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
        <label>Complete?</label>
        <label>Yes</label>
        <input type="radio" value="Yes" />
        <label>No</label>
        <input type="radio" value="No" />
        <button type="submit">Create</button>
      </form>
      <button type="submit" onClick={handleClick}>
        Create
      </button>
      <button onClick={closeNewTaskModal}>Close</button>
    </div>
  );
};

export default NewTaskModal;
