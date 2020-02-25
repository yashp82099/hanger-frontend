import React from 'react'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'


function ProductsContainer(props) {
    
    return (
        <div>
            
            {props.products.map((product,i) => <ProductCard key={i} handleShow={props.handleShow} product={product}/>)}
        </div>
    )
}



export default ProductsContainer
