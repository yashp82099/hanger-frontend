import React, { Component } from 'react'
import ListContainer from '../components/Cart/ListContainer'
import Banner from '../components/Nav/Banner'
import {Icon} from 'semantic-ui-react'
import NavBar from '../components/Nav/NavBar'
import AddressContainer from '../components/Cart/AddressContainer'
import CheckOut from '../components/Cart/CheckOut'
import { connect} from 'react-redux'

class Cart extends Component{



    render(){
    return (
        <div>
            <NavBar/>
            <ListContainer />
            <AddressContainer />
            <CheckOut />
        </div>
    )}
}



const mapStateToProps = (state) => {
    return {...state.user, ...state.address}
}

const mapDispatchToProps = (dispatch) => {
  return {edit_address: (e) => dispatch({type:'EDIT_ADDRESS', value: e.target.value, name: e.target.name}),
          addressChange: (data) => dispatch({type: 'SELECT_ADDRESS', value: data}) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
