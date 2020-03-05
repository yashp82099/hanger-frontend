import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Button, Form, Card} from 'semantic-ui-react'

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
                localStorage.setItem('driver', data.driver)
                console.log(data);
                
            }
        })
        // props.reset_input()
        
        
        props.history.push({pathname: '/home'})
    }
    // {user: {username: props.username, password: props.password}}


    return (
        // <div></div>
        <div className='form'>  {/* {props.render? <Redirect to='/home'/> : localStorage.removeItem('token') } */}
            <Card centered>
                <Card.Content>
                    <Form onSubmit={handleSubmit}  >
                        <Form.Input iconPosition='left' label='Username' placeholder='Username' icon='user' type='text' name='username' value={props.username} onChange={(e)=> props.edit_form(e)} /><br/>
                        <Form.Input iconPosition='left' label='Password' placeholder='Password' icon='lock' type='password' name='password' value={props.password} onChange={(e)=> props.edit_form(e)} />
                        <Button content='Login' primary />
                    </Form> 
                </Card.Content>
               
            </Card>
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
