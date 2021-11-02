import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

//components
import LoginBox from './components/LoginBox/LoginBox';
import NewUserForm from './components/NewUserForm/NewUserForm';



function App() {

const [userToken, setToken] = useState<string>('')

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
        <h1>Task Manager</h1>  
        <LoginBox handleTokens={handleTokens}/>
        </Route>             
        </Switch>       
      </Router>
    </div>
  );
}

export default App;
