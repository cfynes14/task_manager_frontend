import React, { JSXElementConstructor } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import LoginBox from "./components/LoginBox/LoginBox";
import NewUserForm from "./components/NewUserForm/NewUserForm";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";

// interface AppInterface {
//   setLoading: (arg: boolean) => void;
// }

const App = (props: any) => {
  const { setIsLoading } = props;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const userToken = window.sessionStorage.getItem("token");
    console.log(userToken);
    userToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
    // setIsLoading(false);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/new_user"
            element={
              <NewUserForm
                // setIsLoading={setIsLoading}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/account_settings"
            element={
              <Account
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setIsLoading={setIsLoading}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
