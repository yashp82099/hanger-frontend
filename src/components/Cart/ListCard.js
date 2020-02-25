import React from 'react'
import {Item} from 'semantic-ui-react'

function ListCard(props) {
    return (
        <Item.Group>
          <Item>
         <Item.Image size='tiny' src={props.product.thumb_image} />
   
         <Item.Content>
           <Item.Header as='a'>{props.product.title}</Item.Header>
           <Item.Meta>Description</Item.Meta>
           <Item.Description>
             {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
           </Item.Description>
           <Item.Extra>Additional Details</Item.Extra>
         </Item.Content>
       </Item>  
        </Item.Group>
         
    )
}

export default ListCard
