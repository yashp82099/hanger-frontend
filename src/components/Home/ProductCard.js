import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Animated} from "react-animated-css";
import './home.css'

function ProductCard(props) {
    return (
    <Animated animationIn="zoomInDown">
            <div onClick={()=> props.handleShow(props.product)}>
            <div  className='productCardHome'>
              <Card color='blue' centered raised>
                    <Image src={props.product.thumb_image}/>
                    <Card.Content>
                        <Card.Header>{props.product.title}</Card.Header>
                    </Card.Content>
                </Card>  
            </div>
           
        </div> 
    </Animated>
        
    )
}

export default ProductCard
