import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Show from './containers/Show'
import Cart from './containers/Cart'
import Order from './containers/Order'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Login/></Route>
        <Route exact path='/signup'><Signup/></Route>
        <Route exact path='/home' component={() => {
            if(localStorage.getItem('token')){
              return <Home />
            }else{
              return <Redirect to='/' />
            }}} />
        <Route exact path='/cart' component={() => {
            if(localStorage.getItem('token')){
              return <Cart />
            }else{
              return <Redirect to='/' />
            }}} />
        <Route exact path='/order' component={() => {
            if(localStorage.getItem('token')){
              return <Order />
            }else{
              return <Redirect to='/' />
            }}} />
        {/* <Route exact path='/show'><Show/></Route> */}
        {/* <Route exact path='/'> </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
