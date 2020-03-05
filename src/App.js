import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './containers/Home'
import { ActionCableConsumer } from 'react-actioncable-provider';
import Login from './containers/Login'
import Signup from './containers/Signup'
import {connect} from 'react-redux'
// import Show from './containers/Show'
import Cart from './containers/Cart'
import Order from './containers/Order'
import DriveHome from './containers/DriveHome'
import Profile from './containers/Profile'
import jwt_decode from 'jwt-decode'
import { store } from 'react-notifications-component';
import { ToastContainer, toast } from 'react-toastify';


const get_order = 'http://localhost:3000/get/driver/order'
class App extends Component {

  handleReceivedConversation = (some) => {
    let userId = jwt_decode(localStorage.getItem('token')).user_id
    // debugger
    if(some.user_id === userId){
      fetch('http://localhost:3000/get/orders',{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            "Token": localStorage.getItem('token')
        }
    }).then(res => res.json())
    .then(data => this.props.select_order(data.reverse()[0])).then(()=> toast(" Your order has an update, go to the orders tab to see update "))
    }
    
{/* <ActionCable channel={{channel: "OrdersChannel"}} onReceived={this.handleReceivedConversation} */}
    
  }

  handleDriver = () => {
    console.log('hi');
    
    fetch(get_order,{
      method:'GET',
      headers:{
          'Content-Type':'application/json',
          'Token':localStorage.getItem('token')
      }
  }).then(res=> res.json())
  .then(data => {
      console.log(data);
      // debugger
      if(data.id){
          this.props.select_order(data)
      }else{
          this.props.add_order(data)  
      }
      
  })    
  }







  render(){
  return (
    <div>
      {localStorage.driver === "0"? <ActionCableConsumer channel={{channel: "OrderChannel"}} onReceived={this.handleReceivedConversation} /> :null}
      {localStorage.driver === "1"? <ActionCableConsumer channel={{channel: "DriverChannel"}} onReceived={() => this.handleDriver()} /> :null}
      <ToastContainer />
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
          <Route exact path='/driver' component={() => {
            if(localStorage.getItem('token')){
              return <DriveHome />
            }else{
              return <Redirect to='/' />
            }}} />
          <Route exact path='/profile' component={() => {
            if(localStorage.getItem('token')){
              return <Profile />
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
    </div>
  )}
}

const MapStateToProps = (state) => {
  
}

const MapDispatchToProps = (dispatch) => {
  return {add_order: (data) => dispatch({type: 'ADD_ORDER', value: data}),
        select_order: (data) => dispatch({type:'SELECT_ORDER', value: data}),
        add_order: (data)=>dispatch({type:'ADD_ORDERS', value: data}),
        select_order: (data)=>dispatch({type:'SELECT_ORDER', value: data}),}
}



export default connect(MapStateToProps, MapDispatchToProps)(App);
