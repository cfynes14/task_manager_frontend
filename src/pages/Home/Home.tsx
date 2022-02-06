import { useEffect } from "react";

import LoginBox from "../../components/LoginBox/LoginBox";
import Dashboard from "../Dashboard/Dashboard";

interface HomeProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (arg: boolean) => void;
  setIsLoading: (arg: boolean) => void;
}

const Home = (props: HomeProps) => {
  const { isLoggedIn, setIsLoggedIn, setIsLoading } = props;

  useEffect(() => {});

  const token = window.sessionStorage.getItem("token");
  if (!isLoggedIn) {
    console.log("no token");
    return (
      <div>
        <h1>Task Manager</h1>
        <LoginBox setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
      </div>
    );
  } else {
    console.log("logged in");
    return (
      <div>
        <Dashboard setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
      </div>
    );
  }
};

export default Home;
