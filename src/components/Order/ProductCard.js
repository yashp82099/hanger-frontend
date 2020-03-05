import React from 'react'
import {Card, Image, Modal, Header} from 'semantic-ui-react'

function ProductCard(props) {





    return (
        <Modal trigger={<Card>
            <Image size='small' src={props.product.image} wrapped ui={false} />
            </Card>}>
            <Modal.Header>HANGER</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src={props.product.image} />
            <Modal.Description>
                <Header>Order No: {props.info.id}</Header>
                <h2>{props.info.created_at.substring(0,10)}</h2>
                <h2>Product ID: {props.info.product_id}</h2>
                <h2>Price: {props.info.price}</h2>
                <h2>Quantity: {props.info.quantity}</h2>
            </Modal.Description>
            </Modal.Content>
        </Modal>
        
    )
}

export default ProductCard
