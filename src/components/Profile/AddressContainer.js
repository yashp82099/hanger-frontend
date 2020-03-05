import React from 'react'
import {Card} from 'semantic-ui-react'
import AddressCard from './AddressCard'

function AddressContainer(props) {
    return (
        <Card.Group centered>
            {props.addresses.map(address =><AddressCard address={address}/>)}
        </Card.Group>
    )
}

export default AddressContainer
