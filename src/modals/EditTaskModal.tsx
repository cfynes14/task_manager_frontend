import React, { MutableRefObject } from "react";
import { useState, useEffect, useRef } from "react";

import editTask from "../utils/api/editTask";

interface CurrentTask {
  completed: boolean;
  description: React.MutableRefObject<null>;
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
  const [description, setDescription] = useState<MutableRefObject<null>>();
  const [completed, setComplete] = useState<boolean>(false);

  const taskDescription = useRef(null);

  useEffect(() => {
    // console.log(inputText);
    setId(currentTask._id);
    setDescription(taskDescription);
    setComplete(currentTask.completed);
  }, []);

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

    console.log(res);
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Description</label>
        <input
          type="text"
          //
          ref={description}
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //   setDescription(e.target.value)
          // }
        />
        <div className="radio">
          <label>Complete?</label>
          <label>
            <input
              type="radio"
              value="Yes"
              checked={completed === true}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
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
  );
};

export default EditTaskModal;
