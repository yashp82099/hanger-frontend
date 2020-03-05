import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
// import addressReducer from '../../reducers/addressReducer'

function AddressCard(props) {
    return (
        <div onClick ={(e) => props.selectAddress(props.address)}>
            <Card>
                <Card.Content header={props.address.name} />
                <Card.Content description={props.address.address_1} />
                {/* <Card.Content description={props.address.address_2} /> */}
                <Card.Content description={` ${props.address.city} ${props.address.state} ${props.address.zip}`}/>
                {/* <Card.Content description={description} /> */}
                {/* <Icon name='user' />4 Friends */}
                
            </Card>
        </div>
    )
}

export default AddressCard
