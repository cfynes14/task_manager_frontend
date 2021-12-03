import React from "react";

import LoginBox from "../components/LoginBox/LoginBox";
import Dashboard from "../pages/Dashboard";

import { TaskParams } from "../components/Task/Task";

const Home = () => {
  const token = window.sessionStorage.getItem("token");
  if (!token) {
    console.log("no token");
    return (
      <div>
        <h1>Task Manager</h1>
        <LoginBox />
      </div>
    );
  } else {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
};

export default Home;
