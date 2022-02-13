import React from "react";

import TaskStyles from "./styles";

interface SetTaskInterface {
  completed: boolean | undefined;
  _id: string;
  description: string;
}

export interface TaskParams {
  id: string;
  description: string;
  completed?: boolean;
  openDeleteModal: () => void;
  openEditModal: () => void;
  setCurrentTask: (params: SetTaskInterface) => void;
}

const Task = ({
  id,
  description,
  completed,
  openDeleteModal,
  openEditModal,
  setCurrentTask,
}: TaskParams): JSX.Element => {
  const handleDeleteClick = () => {
    openDeleteModal();
    setCurrentTask({ completed: completed, description: description, _id: id });
  };

  const handleEditClick = () => {
    openEditModal();
    setCurrentTask({ completed: completed, description: description, _id: id });
  };

  return (
    <TaskStyles>
      <h3>{description}</h3>
      <p>{completed ? "Complete" : "Incomplete"}</p>
      <button className="taskButton" onClick={handleEditClick}>
        Edit
      </button>
      <button className="taskButton" onClick={handleDeleteClick}>
        Delete
      </button>
    </TaskStyles>
  );
};

export default Task;
