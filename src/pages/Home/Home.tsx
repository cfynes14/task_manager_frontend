import { useEffect } from "react";

import LoginBox from "../../components/LoginBox/LoginBox";
import Dashboard from "../Dashboard/Dashboard";

import HomeStyles from "./styles";

interface HomeProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (arg: boolean) => void;
  setIsLoading: (arg: boolean) => void;
}

const Home = (props: HomeProps) => {
  const { isLoggedIn, setIsLoggedIn, setIsLoading } = props;

  useEffect(() => {
    console.log("home using effect");
    setIsLoading(false);
  }, []);

  const token = window.sessionStorage.getItem("token");
  if (!isLoggedIn) {
    console.log("no token");
    return (
      <HomeStyles>
        <main>
          <h1>Task Manager</h1>
          <LoginBox setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
        </main>
      </HomeStyles>
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
