import React from 'react'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'
import {Card} from 'semantic-ui-react'
import './home.css'


function ProductsContainer(props) {
    
    return (
        <div className='homeList'>
            <Card.Group centered>
                {props.products.map((product,i) => <ProductCard key={i} handleShow={props.handleShow} product={product}/>)}
            </Card.Group>
        </div>
            
    )
}



export default ProductsContainer
