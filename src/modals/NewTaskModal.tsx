import { useState, useEffect } from "react";

import getTasks from "../utils/api/getTasks";
import createTask from "../../src/utils/api/createTask";

import ModalStyles from "./ModalStyles";

import { TaskParams } from "../components/Task/Task";

interface NewTaskModalProps {
  closeNewTaskModal: () => void;
  handleNewTask: () => void;
  setNewTaskDescription: (arg: string) => void;
  setNewTaskCompleted: (arg: boolean) => void;
}

//React.MouseEventHandler<HTMLButtonElement>

const NewTaskModal = ({
  closeNewTaskModal,
  handleNewTask,
  setNewTaskDescription,
  setNewTaskCompleted,
}: NewTaskModalProps) => {
  const [description, setDescription] = useState<string>("");
  const [completed, setComplete] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value === "Yes"
      ? setNewTaskCompleted(true)
      : setNewTaskCompleted(false);
  };

  const handleClick = async () => {
    handleNewTask();
    closeNewTaskModal();

    // const taskParams = {
    //   description,
    //   completed,
    // };
    // const res = await createTask(taskParams);
    // if (res.status === 201) {
    //   handleTasksChange();
    //   closeNewTaskModal();
    // }
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
            setNewTaskDescription(e.target.value)
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
