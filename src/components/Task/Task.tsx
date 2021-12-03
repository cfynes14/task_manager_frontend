import React from "react";
import "./task.scss";

export interface TaskParams {
  description: string;
  completed?: boolean;
}

const Task = ({ description, completed }: TaskParams): JSX.Element => {
  return (
    <div className="container">
      <h3>{description}</h3>
      <p>{completed}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Task;
