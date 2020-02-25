import React from 'react'
import {connect} from 'react-redux'
import ListCard from './ListCard'
// import {List} from ''

function ListContainer(props) {
    return (
        <div className='cartList'>
          <div >
            {props.cart.map(product => <ListCard product={product} />)}
        </div>  

            <div>
                <hr/>
                
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
