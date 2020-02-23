import React from 'react'
import {connect} from 'react-redux'

function SignUp(props) {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProp = (state) => {
    return {...state.login}
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProp, mapDispatchToProps)(SignUp)
