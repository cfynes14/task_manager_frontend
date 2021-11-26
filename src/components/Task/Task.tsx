import React from "react";

export interface TaskParams {
  description: string;
  completed?: boolean;
}

const Task = ({ description, completed }: TaskParams): JSX.Element => {
  return (
    <div>
      <h3>{description}</h3>
      <p>{completed}</p>
    </div>
  );
};

export default Task;
