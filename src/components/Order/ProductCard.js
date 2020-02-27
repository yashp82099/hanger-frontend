import React from 'react'
import {Item, Image, Modal, Header} from 'semantic-ui-react'

function ProductCard(props) {





    return (
        <Modal trigger={<Item>
            <Item.Image size='tiny' src={props.product.image} />

            <Item.Content>
                <Item.Header as='a'>Product Name</Item.Header>
            </Item.Content>
        </Item>}>
            <Modal.Header>HANGER</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src={props.product.image} />
            <Modal.Description>
                <Header>Default Profile Image</Header>
                <h2>Quantity: {props.info.quantity}</h2>
                <p>
                We've found the following gravatar image associated with your e-mail
                address.
                </p>
                <p>Is it okay to use this photo?</p>
            </Modal.Description>
            </Modal.Content>
        </Modal>
        
    )
}

export default ProductCard
