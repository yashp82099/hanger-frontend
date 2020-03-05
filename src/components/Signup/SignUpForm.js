import React from 'react'
import {connect} from 'react-redux'
import { Button, Form, Card} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

const signUpAPI = 'http://localhost:3000/users'

function SignUp(props) {


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
        fetch(signUpAPI,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: {
                first_name: props.first_name,
                last_name: props.last_name,
                username: props.username,
                password: props.password,
                phone_number: props.phone_number,
                email: props.email
            }}) 
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.msg === 'PASS'){  
                props.history.push({pathname: '/home'})
            }
        })
        // props.reset_input()
        
        
        
    }


    return (
        <div className='Form'> 
            <Card centered>
            <Card.Content>
            <Form onSubmit={handleSubmit}  >
                <Form.Input type='text' icon='user' label='First Name' name='first_name' value={props.first_name} onChange={(e)=>props.edit_form(e)} placeholder='First Name' /><br/>
                <Form.Input type='text' icon='user' label='Last Name' name='last_name' value={props.last_name} onChange={(e)=>props.edit_form(e)} placeholder='Last Name' /><br/>
                <Form.Input type='text' icon='user' label='Username' name='username' value={props.username} onChange={(e)=>props.edit_form(e)} placeholder='Username' /><br/>
                <Form.Input type='text' icon='lock' label='Password' name='password' value={props.password} onChange={(e)=>props.edit_form(e)} placeholder='Password' /><br/>
                <Form.Input type='text' icon='phone' label='Phone number' name='phone_number' value={props.phone_number} onChange={(e)=>props.edit_form(e)} placeholder='Phone Number' /><br/>
                <Form.Input type='text' icon='mail' label='E-Mail' name='email' value={props.email} onChange={(e)=>props.edit_form(e)} placeholder='E-Mail' /><br/>
                <Button type='submit'>SignUp</Button>
            </Form>
            </Card.Content>
            </Card>
            
        </div>
    )
}

const mapStateToProp = (state) => {
    return {...state.signup}
}

const mapDispatchToProps = (dispatch) => {
    return {
        edit_form: (e) => dispatch({type: 'UPDATE_INPUT', value: e.target.value, name: e.target.name}),
        reset_input: () => dispatch({type: 'RESET_INPUT'})
    }
}

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(SignUp))
