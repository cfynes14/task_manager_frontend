import React from "react";

import Task from "../components/Task/Task";
import { TaskParams } from "../components/Task/Task";

import logoutAll from "../utils/logoutAll";

interface TasksProps {
  tasks: any;
}

const handleLogout = (token: string): any => {
  console.log("handlingLogout");
  logoutAll(token);
};

const Tasks = ({ tasks, token }: any) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {tasks.map((task: any) => (
        <Task description={task.description} completed={task.completed} />
      ))}
      <button onClick={handleLogout(token)}>Logout</button>
    </div>
  );
};

export default Tasks;
