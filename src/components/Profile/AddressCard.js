import React from 'react'
import {Card, Button} from 'semantic-ui-react'

function AddressCard(props) {
    return (
        <Card>
            <Card.Content>
            <Card.Header>{props.address.name}</Card.Header>
            <Card.Meta>{props.address.address_1}</Card.Meta>
            {/* <Card.Meta>{props.address.address_2}</Card.Meta> */}
            <Card.Meta>{props.address.city} {props.address.state} {props.address.zip}</Card.Meta>
            <div className='ui two buttons'>
            <Button basic color='red'>
                Delete
            </Button>
            </div>
            </Card.Content>
        </Card>
    )
}

export default AddressCard
