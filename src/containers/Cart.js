import React, { Component } from 'react'
import ListContainer from '../components/Cart/ListContainer'
// import Banner from '../components/Nav/Banner'
// import {Icon} from 'semantic-ui-react'
import NavBar from '../components/Nav/NavBar'
import AddressContainer from '../components/Cart/AddressContainer'
import CheckOut from '../components/Cart/CheckOut'
import { connect} from 'react-redux'
import './main.css'

class Cart extends Component{



    render(){
    return (
        <div>
            <NavBar/>
            <div className='cartDiv'>
             <ListContainer />   
            </div>
            <div className='totalDiv'>
                <h2>${this.props.total}</h2>
            </div>
            <div className='addressBtn'>
               <AddressContainer /> 
            </div >
            <div className='addressTo'>
            {this.props.selectedAddress? <h2>to:</h2>: <h3>Select address</h3>}
            {this.props.selectedAddress? <h3>{this.props.selectedAddress.name}<br/>
                                                {this.props.selectedAddress.address_1}<br/>
                                                {this.props.selectedAddress.address_2}<br/>
                                                {this.props.selectedAddress.city} {this.props.selectedAddress.state} {this.props.selectedAddress.zip}</h3>: null}
            </div>
            <div className='checkBtn'>
                {this.props.cart.length > 0 && this.props.selectedAddress?<CheckOut />: null}
            </div>
        </div>
    )}
}



const mapStateToProps = (state) => {
    return {...state.user, ...state.address, ...state.cart, ...state.order}
}

const mapDispatchToProps = (dispatch) => {
  return {edit_address: (e) => dispatch({type:'EDIT_ADDRESS', value: e.target.value, name: e.target.name}),
          addressChange: (data) => dispatch({type: 'SELECT_ADDRESS', value: data}),
        reset_form: () => dispatch({type: 'RESET_FORM'}) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
