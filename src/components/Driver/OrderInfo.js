import React from 'react'
import './drive.css'
import { Card, Icon, Image } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

function OrderInfo(props) {

    const link = () => {
        let address_link = props.order.address.address_1.split(" ").join('+')
        address_link = `${address_link}+${props.order.address.city}+${props.order.address.state}+${props.order.address.zip}`
        return `https://www.google.com/maps/place/${address_link}`
    }


    return (
        <div>
            <div className="infoDriverDiv">
            <Card raised>
                <Card.Content header={`${props.order.user.first_name} ${props.order.user.last_name}`}/>
                <Card.Content description>
                    <h4>Costumer Phone # {props.order.user.phone_number}</h4>
                    <p>To:
                    {props.order.address.name}<br/>
                    {props.order.address.address_1}<br/>
                    {props.order.address.address_2}<br/>
                    {props.order.address.city} {props.order.address.state} {props.order.address.zip}</p> 
                </Card.Content>
                <Card.Content extra>

                <a className='googlePar' href={link()} target="_blank"><img className='googleMap' src='http://icon-library.com/images/google-map-icon-transparent/google-map-icon-transparent-6.jpg'/></a>
                </Card.Content>
            </Card>
            <div className='orderNum'>
                <h1>Order No. {props.order.id}</h1>
            </div>
             
            </div>
            
           
        </div>
    )
}

export default OrderInfo
