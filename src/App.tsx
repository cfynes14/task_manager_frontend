import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

//components
import LoginBox from './components/LoginBox/LoginBox';
import NewUserForm from './components/NewUserForm/NewUserForm';
import Home from './pages/Home';
import Tasks from './pages/Tasks'

import { TaskParams } from './components/Task/Task'

const data: TaskParams[] = [
  { 
  description: 'wash plates up',
  completed: true 
  },
  { 
    description: 'hoover car',
    completed: false
  },
  {
    description: 'tidy flat',
    completed: true
  }
]

const App = () => {

const [userToken, setToken] = useState<string>('');
const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
const [tasks, setTasks] = useState<Array<TaskParams>>([]);

const handleTokens = (token: string) => {
  console.log('setting tokens')
  console.log(token)
    setToken(token)
    setLoggedIn(true)
}

useEffect(() => {
  setTasks(data)
  console.log(tasks)
}, [])

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
            <Tasks tasks={tasks}/>
          ) : (
            <h1>Sorry, your login didn't work</h1>
          )}
        </Route>             
        </Switch>       
      </Router>
    </div>
  );
}

export default App;
