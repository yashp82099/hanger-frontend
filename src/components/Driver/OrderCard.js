import React from 'react'
import './drive.css'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

// import ProductCard from '../Home/ProductCard'
// import { PopupHeader } from 'semantic-ui-react'

function OrderCard(props) {
    return (
        <div className='liveOrders'>
            <h2>Order No. {props.order.id}</h2>
            <h2>Costumer Name: {props.order.user.first_name} {props.order.user.last_name}</h2>
            <p>Phone No. {props.order.user.phone_number}</p>
            <p>To : {props.order.address.name}<br/>
            {props.order.address.address_1}<br/>
            {props.order.address.address_2}<br/>
            {props.order.address.city} {props.order.address.state} {props.order.address.zip}</p>
            <p>Order Info :</p>
            <ol>
                {props.order.products.map((product,key)=> <li>{product.product_number} ---- {props.order.order_products[key].quantity}</li>)}
            </ol>
            <button onClick={(e)=>props.handleSelect(props.order)}>Accept</button>
        </div>
    )
}

export default OrderCard
