import React from "react";

import Task from "../components/Task/Task";
import { TaskParams } from "../components/Task/Task";

import logoutAll from "../utils/logoutAll";

interface TasksProps {
  tasks: any;
}

const handleLogout = (): any => {
  console.log("handlingLogout");
  console.log(sessionStorage.getItem("token"));
  logoutAll(sessionStorage.getItem("token"));
};

const Dashboard = ({ setToken, tasks, token }: any) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {tasks.map((task: any) => (
        <Task description={task.description} completed={task.completed} />
      ))}
      <button
        onClick={() => {
          handleLogout();
          setToken("");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
