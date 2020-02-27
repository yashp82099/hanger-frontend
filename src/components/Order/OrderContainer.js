import React from 'react'
import OrderItem from './OrderItem'
import {Card} from 'semantic-ui-react'

function OrderContainer(props) {
    return (
        <Card.Group>
            {props.orders.length > 0? props.orders.map(order => <OrderItem handleClick={props.handleClick} order={order} />):<h1>YOU DON'T HAVE ANY ORDERS</h1>}
        </Card.Group>
            
            

    )
}

export default OrderContainer
