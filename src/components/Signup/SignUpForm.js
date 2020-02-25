import React from 'react'
import {connect} from 'react-redux'

function SignUp(props) {
    return (
        <div>
            <form>
                <input type='text' name='first_name' value={props.first_name} onChange={(e)=>props.edit_form(e)} placeholder='First Name' /><br/>
                <input type='text' name='last_name' value={props.last_name} onChange={(e)=>props.edit_form(e)} placeholder='Last Name' /><br/>
                <input type='text' name='username' value={props.username} onChange={(e)=>props.edit_form(e)} placeholder='Username' /><br/>
                <input type='text' name='password' value={props.password} onChange={(e)=>props.edit_form(e)} placeholder='Password' /><br/>
                <input type='text' name='phone_number' value={props.phone_number} onChange={(e)=>props.edit_form(e)} placeholder='Phone Number' /><br/>
                <input type='text' name='email' value={props.email} onChange={(e)=>props.edit_form(e)} placeholder='E-Mail' /><br/>
                <button type='submit' />
            </form>
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

export default connect(mapStateToProp, mapDispatchToProps)(SignUp)
