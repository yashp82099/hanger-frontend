import React from 'react'
import {connect} from 'react-redux'
import AddressCard from './AddressCard'

function AddressContainer(props) {
    return (
        <div>
            {props.addresses > 0? 
            props.user.addresses.map(address => <AddressCard address={address}/>):
            <h2>NO ADDRESSES</h2>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {...state.user}
}

export default connect(mapStateToProps)(AddressContainer)
