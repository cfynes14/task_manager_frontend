import React, { MutableRefObject } from "react";
import { useState, useEffect } from "react";

import editTask from "../utils/api/editTask";

import ModalStyles from "./ModalStyles";

interface CurrentTask {
  completed: boolean;
  description: string;
  _id: string;
}

interface EditModalInterface {
  closeEditModal: () => void;
  handleTasksChange: () => void;
  currentTask: CurrentTask;
}

const EditTaskModal = (props: EditModalInterface) => {
  const { closeEditModal, handleTasksChange, currentTask } = props;

  const [_id, setId] = useState<string>("");
  const [description, setDescription] = useState<string>();
  const [completed, setComplete] = useState<boolean>(false);

  useEffect(() => {
    setId(currentTask._id);
    setDescription(currentTask.description);
    setComplete(currentTask.completed);
  }, []);

  const handleDescriptionChange = (e: string) => {
    setDescription(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Yes") {
      setComplete(true);
    } else {
      setComplete(false);
    }
  };

  const handleClick = async () => {
    const taskParams = {
      _id,
      description,
      completed,
    };
    const res = await editTask(taskParams);
    if (res && res.status === 200) {
      handleTasksChange();
      closeEditModal();
    }
  };

  return (
    <ModalStyles>
      <div className="modal-container">
        <h1>Edit Task</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Description</label>
          <input
            className="text-input"
            type="text"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDescriptionChange(e.target.value)
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
          Update
        </button>
        <button onClick={closeEditModal}>Close</button>
      </div>
    </ModalStyles>
  );
};

export default EditTaskModal;
