import React from "react";
import { useState } from "react";

import LoginBox from "../../components/LoginBox/LoginBox";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const token = window.sessionStorage.getItem("token");
  if (!isLoggedIn) {
    console.log("no token");
    return (
      <div>
        <h1>Task Manager</h1>
        <LoginBox setIsLoggedIn={setIsLoggedIn} />
      </div>
    );
  } else {
    console.log("logged in");
    return (
      <div>
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      </div>
    );
  }
};

export default Home;
