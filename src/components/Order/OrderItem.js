import React from 'react'
import {Card} from 'semantic-ui-react'

function OrderItem(props) {
    return (
        <div onClick={()=> props.handleClick(props.order)}>
           <Card>
            <Card.Content
                header='Order'
                meta={props.order.id}
                // description='Elliot is a music producer living in Chicago.'
            />
        </Card> 
        </div>
        
    )
}

export default OrderItem
