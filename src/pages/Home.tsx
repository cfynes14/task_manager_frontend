import React from "react";

import LoginBox from "../components/LoginBox/LoginBox";
import Dashboard from "../pages/Dashboard";

import { TaskParams } from "../components/Task/Task";

interface HomeProps {
  handleTokens: (token: string) => void;
  setToken: any;
  token: string;
  tasks: TaskParams[];
}

const Home = ({ setToken, handleTokens, token, tasks }: HomeProps) => {
  if (!token) {
    console.log("no token");
    return (
      <div>
        <h1>Task Manager</h1>
        <LoginBox handleTokens={handleTokens} />
      </div>
    );
  } else {
    return (
      <div>
        <Dashboard setToken={setToken} tasks={tasks} token={token} />
      </div>
    );
  }
};

export default Home;
