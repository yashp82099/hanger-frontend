import React from 'react'
import {connect} from 'react-redux'
import {Redirect, useHistory, withRouter} from 'react-router-dom'

const loginAPI = 'http://localhost:3000/sessions'


function LoginForm(props) {
    // const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
        fetch(loginAPI,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: {username: props.username, password: props.password}}) 
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.msg === 'PASS'){
                localStorage.setItem('token',data.token)
                
            }
        })
        // props.reset_input()
        props.history.push({pathname: '/home'})
    }
    // {user: {username: props.username, password: props.password}}


    return (
        <div>
            {/* {props.render? <Redirect to='/home'/> : localStorage.removeItem('token') } */}
            <form onSubmit={handleSubmit}  >
                <input type='text' name='username' value={props.username} onChange={(e)=> props.edit_form(e)} /><br/>
                <input type='password' name='password' value={props.password} onChange={(e)=> props.edit_form(e)} />
                <button type='submit'>login</button>
            </form>
            
        </div>
    )
}


const mapStateToProp = (state) => {
    return {...state.login}
}

const mapDispatchToProp = (dispatch) => {
    return {
        edit_form: (e) => dispatch({ type: 'UPDATE_INPUT', value: e.target.value, name: e.target.name}),
        reset_input: () => dispatch({type: 'RESET_INPUT'}) 
    }
}

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(LoginForm))
