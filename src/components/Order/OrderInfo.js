import React from 'react';
import ProductCard from './ProductCard';
import './order.css';
import {Icon} from 'semantic-ui-react'
import { prettyDOM } from '@testing-library/react';

function OrderInfo(props) {

    const renderAddress = (address) => {
        return <div>
            <h4>To: {address.address_1}<br/>{`${address.city} ${address.state} ${address.zip}`}</h4>
        </div>
    }


    return (
        <div className='orderDiv'>
            <div>
                {console.log(props.order)}
                <h2>Order Info: </h2>
                {props.order.address? renderAddress(props.order.address): null}
                <br/>
                <Icon size='big' name='credit card outline'>(...{props.order.last_4})</Icon>
                <br/>
                <h4>Order Status: {props.order.status}</h4>
                <div className='driverInfo'>
                    <h5>DRIVER</h5>
                    <p>Driver is on their way to pick you the order</p>
                </div>
                <div className='productCard'>
                {props.order.products? props.order.products.map((product, key) => <ProductCard product={product} info={props.order.order_products[key]} />) : null }
                </div>
               
            </div>
        </div>
    )
}

export default OrderInfo

// order
// {address_id: 7, address: {…}, created_at: "2020-02-…}

// address
// {address_1: "1175 Peachtree St NE", address_2: "sch…}
// address_id
// 7
// client_ip
// "65"
// created_at
// "2020-02-26T14:50:35.790Z"
// driver_id
// null
// id
// 5
// last_4
// "4242"

// order_products
// [{…}, {…}]

// 0
// {created_at: "2020-02-26T14:50:50.724Z", id: 1, ord…}
// created_at
// "2020-02-26T14:50:50.724Z"
// id
// 1
// order_id
// 5
// price
// null
// product_id
// 5
// quantity
// 2
// rating
// null
// updated_at
// "2020-02-26T14:50:50.724Z"

// 1
// {created_at: "2020-02-26T14:51:10.514Z", id: 2, ord…}
// created_at
// "2020-02-26T14:51:10.514Z"
// id
// 2
// order_id
// 5
// price
// null
// product_id
// 10
// quantity
// 3
// rating
// null
// updated_at
// "2020-02-26T14:51:10.514Z"

// products
// [{…}, {…}]

// 0
// {created_at: "2020-02-25T19:21:05.160Z", id: 5, ima…}
// created_at
// "2020-02-25T19:21:05.160Z"
// id
// 5
// image
// "https://www.forever21.com/images/1_front_330/00397205-01.jpg"
// product_number
// 2000397205
// updated_at
// "2020-02-25T19:21:05.160Z"

// 1
// {created_at: "2020-02-25T19:21:05.204Z", id: 10, im…}
// created_at
// "2020-02-25T19:21:05.204Z"
// id
// 10
// image
// "https://www.forever21.com/images/1_front_330/00395847-01.jpg"
// product_number
// 2000395847
// updated_at
// "2020-02-25T19:21:05.204Z"
// status
// "INCOMPLETE"
// updated_at
// "2020-02-26T14:50:35.790Z"
// user_id
