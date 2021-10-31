import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

//components
import LoginBox from './components/LoginBox/LoginBox';
import NewUserForm from './components/NewUserForm/NewUserForm';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/new_user">
          <NewUserForm />
        </Route>
        <Route path="/">
        <h1>Task Manager</h1>  
        <LoginBox />
        </Route>             
        </Switch>       
      </Router>
    </div>
  );
}

export default App;
