import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function ProductCard(props) {
    return (
        <div onClick={()=> props.handleShow(props.product)}>
        <Card>
            <Image src={props.product.thumb_image}/>
            <Card.Content>
                <Card.Header>{props.product.title}</Card.Header>
            </Card.Content>
        </Card></div>
    )
}

export default ProductCard
