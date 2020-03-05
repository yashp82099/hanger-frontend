import React from 'react'
import OrderCard from './OrderCard'
import {Item} from 'semantic-ui-react'

function OrdersContainer(props) {
    return (
        <Item.Group divided>
            {props.orders.map(order => <OrderCard handleSelect={props.handleSelect} order={order}/>)}
        </Item.Group>       
    )
}

export default OrdersContainer
