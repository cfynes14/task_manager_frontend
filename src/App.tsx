import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowerRouter as Router, Route, Switch  } from 'react-dom-router'

//components
import LoginBox from './components/Login/Login';
import NewUser from './components/NewUser/NewUser';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/new_user">
          <NewUser />
        </Route>
        <h1>Task Manager</h1>
        <LoginBox />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
