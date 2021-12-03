import React, { JSXElementConstructor } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import LoginBox from "./components/LoginBox/LoginBox";
import NewUserForm from "./components/NewUserForm/NewUserForm";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import NoLogin from "./pages/NoLogin";

const App = () => {
  const handleTokens = (token: string) => {
    window.sessionStorage.setItem("token", JSON.stringify(token));
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/new_user">
            <NewUserForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
