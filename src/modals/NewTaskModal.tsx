import { useState } from "react";

import createTask from "../../src/utils/api/createTask";

const NewTaskModal = ({ closeNewTaskModal }: any) => {
  const [description, setDescription] = useState<string>("");
  const [complete, setComplete] = useState<boolean>(false);

  const handleClick = () => {
    const taskParams = {
      description,
      complete,
    };
    createTask(taskParams);
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
