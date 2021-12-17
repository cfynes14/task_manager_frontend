import React from "react";
import "./task.scss";

export interface TaskParams {
  id: string;
  description: string;
  completed?: boolean;
  openDeleteModal: () => void;
}

const Task = ({
  description,
  completed,
  openDeleteModal,
}: TaskParams): JSX.Element => {
  return (
    <div className="container">
      <h3>{description}</h3>
      <p>{completed}</p>
      <button>Edit</button>
      <button onClick={openDeleteModal}>Delete</button>
    </div>
  );
};

export default Task;
