import React from 'react';
import './App.css';
import Home from './Home';
import CovidFetch from './CovidFetch';
import Logout from './Logout';
import Registration from './Registration'
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/> 
        <Route exact path='/corona' component={CovidFetch}/> 
        <Route exact path='/logout' component={Logout}/> 
        <Route exact path='/registred' component={Registration}/> 
      </Switch>
    </div>
  );
}

export default App;
