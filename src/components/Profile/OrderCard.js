import React from 'react'
import {Item } from 'semantic-ui-react'
import './profile.css'

function OrderCard(props) {
    return (
        <div className='proOrderCard'>
            <Item onClick={()=> props.handleSelect(props.order)}>
                <h3>Order No. {props.order.id} </h3>
                <Item.Meta>{props.order.address.name}<br/>
                            {props.order.address.address_1}<br/>
                            {props.order.address.city} {props.order.address.state} {props.order.address.zip}</Item.Meta>
                            <br/>
                            <p>{props.order.created_at.substring(0,10)} </p>
            </Item>
        </div>
            
    )
}

export default OrderCard
