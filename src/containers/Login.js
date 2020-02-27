import React, { Component } from 'react'
// import {connect} from 'react-redux'
import LoginForm from '../components/Login/LoginForm'

class Login extends Component {

    componentDidMount(){
        localStorage.removeItem('token')
    }

    render(){
      return (
        <div>
            <LoginForm />
        </div>
    )  
    }
    
}

export default Login
