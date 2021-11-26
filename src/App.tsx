import React, { JSXElementConstructor } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import LoginBox from "./components/LoginBox/LoginBox";
import NewUserForm from "./components/NewUserForm/NewUserForm";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NoLogin from "./pages/NoLogin";

import { TaskParams } from "./components/Task/Task";

const data: TaskParams[] = [
  {
    description: "wash plates up",
    completed: true,
  },
  {
    description: "hoover car",
    completed: false,
  },
  {
    description: "tidy flat",
    completed: true,
  },
];

const setToken = (userToken: string) => {};

const getToken = () => {};

const App = () => {
  // const [userToken, setToken] = useState<string>("");
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Array<TaskParams>>([]);

  const token = getToken;

  const handleTokens = () => {
    console.log("setting tokens");
    console.log(token);
    // setToken(token);
    console.log(isLoggedIn);
    setLoggedIn(true);
    sessionStorage.setItem("token", JSON.stringify(token));
  };

  useEffect(() => {
    setTasks(data);
    console.log(tasks);
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/new_user">
            <NewUserForm />
          </Route>
          <Route path="/">
            <Home handleTokens={handleTokens} token={token} tasks={tasks} />
          </Route>
          <Route path="/dashboard">
            <h1>GREEETINGS!!!</h1>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
