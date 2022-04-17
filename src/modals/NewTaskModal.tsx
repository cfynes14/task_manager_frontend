import { useState, useEffect } from "react";

import getTasks from "../utils/api/getTasks";
import createTask from "../../src/utils/api/createTask";

import ModalStyles from "./ModalStyles";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Yes") {
      setComplete(true);
    } else {
      setComplete(false);
    }
  };

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
    <ModalStyles>
      <h1>Create New Task</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Description</label>
        <input
          className="text-input"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
        <div className="radio">
          <label>Complete?</label>
          <label>
            <input
              className="radio-input"
              type="radio"
              value="Yes"
              checked={completed === true}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              className="radio-input"
              type="radio"
              value="No"
              checked={completed === false}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </form>
      <button type="submit" onClick={handleClick}>
        Create
      </button>
      <button onClick={closeNewTaskModal}>Close</button>
    </ModalStyles>
  );
};

export default NewTaskModal;
