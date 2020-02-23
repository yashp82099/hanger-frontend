import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Login/></Route>
        <Route exact path='/signup'><Signup/></Route>
        <Route exact path='/home'><Home/></Route>
        {/* <Route exact path='/'> </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
