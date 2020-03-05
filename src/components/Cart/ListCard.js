import React from 'react'
import {Item} from 'semantic-ui-react'

function ListCard(props) {
    return (
        <Item.Group>
          <Item>
         <Item.Image size='tiny' src={props.product.thumb_image} />
   
         <Item.Content>
           <Item.Header >{props.product.title}</Item.Header>
           <Item.Meta></Item.Meta>
            <h4>${props.product.price}</h4>
            <p>Quantity: {props.product.quantity}</p>
         </Item.Content>
       </Item>  
        </Item.Group>
         
    )
}

export default ListCard
