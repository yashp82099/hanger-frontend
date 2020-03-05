import React from 'react'
import {connect} from 'react-redux'
import ListCard from './ListCard'
import './cart.css'
// import {List} from ''

function ListContainer(props) {
    return (
        <div className='cartList'>
          <div >
            {props.cart.length > 0?props.cart.map(product => <ListCard product={product} />): <div className='nothing'>
                <h2>CART IS EMPTY</h2>
                </div>}
        </div>  
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {...state.cart}
}

const mapStateToDispatch = (dispatch) => {
    return {}
}

export default connect(mapStateToProps,mapStateToDispatch)(ListContainer)
