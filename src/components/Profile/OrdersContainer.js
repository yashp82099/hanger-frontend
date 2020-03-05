import React from 'react'
import OrderCard from './OrderCard'
import Order from '../../containers/Order'
import { Divider, Header, Image, Segment } from 'semantic-ui-react'

import './profile.css'

function OrdersContainer(props) {
    return (
        
        <Segment>
            {props.orders.filter(order=> order.status !== 'COMPLETE').length > 0? <div>
                <Divider horizontal>Incomplete:</Divider>
                <div className='ICDiv'>
                 {props.orders.filter(order=> order.status !== 'COMPLETE').reverse().map(order=> <OrderCard handleSelect={props.handleSelect} order={order} />)}   
                    </div></div> : null}
                
        {/* <Divider section /> */}
                <Divider horizontal>
                Complete:
                </Divider>
                <div className='CDiv'>
                    {props.orders.filter(order=> order.status === 'COMPLETE').reverse().map(order=> <OrderCard handleSelect={props.handleSelect} order={order} />)}
                </div>
                
        </Segment>
    )
}

export default OrdersContainer
