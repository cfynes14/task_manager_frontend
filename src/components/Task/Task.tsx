import React from "react";
import "./task.scss";

interface SetTaskInterface {
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
    console.log("handling delete click...");
    openDeleteModal();
    setCurrentTask({ description: description, _id: id });
  };

  return (
    <div className="container">
      <h3>{description}</h3>
      <p>{completed ? "Complete" : "Incomplete"}</p>
      <button>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Task;
