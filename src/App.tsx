import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

//components
import LoginBox from './components/LoginBox/LoginBox';
import NewUserForm from './components/NewUserForm/NewUserForm';
import Home from './pages/Home';
import Tasks from './pages/Tasks'



function App() {

const [userToken, setToken] = useState<string>('')
const [isLoggedIn, setLoggedIn] = useState<boolean>(false)

const handleTokens = (token: string) => {
  console.log('setting tokens')
  console.log(token)
    setToken(token)
}

  return (
    <div>
      <Router>
        <Switch>
        <Route path="/new_user">
          <NewUserForm />
        </Route>
        <Route path="/">
          <Home handleTokens={handleTokens} />
        </Route>
        <Route path="/tasks">
          {isLoggedIn ?(
            <Tasks />
          ) : (

          )}
        </Route>             
        </Switch>       
      </Router>
    </div>
  );
}

export default App;
