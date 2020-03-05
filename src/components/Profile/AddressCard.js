import React from 'react'
import {Card, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'

function AddressCard(props) {

    const handelClick = () =>{
        fetch(`http://localhost:3000/addresses/${props.address.id}`,{
            method: 'DELETE',
            headers:{'Content-Type':'application/json'}
        }).then(res => res.json()).then(data => props.handleAddress(data.address))
        // console.log(props.address.id);
        
    }


    return (
        <Card>
            <Card.Content>
            <Card.Header>{props.address.name}</Card.Header>
            <Card.Meta>{props.address.address_1}</Card.Meta>
            {/* <Card.Meta>{props.address.address_2}</Card.Meta> */}
            <Card.Meta>{props.address.city} {props.address.state} {props.address.zip}</Card.Meta>
            <div className='ui two buttons'>
            <Button onClick={handelClick} basic color='red'>
                Delete
            </Button>
            </div>
            </Card.Content>
        </Card>
    )
}

export default AddressCard
