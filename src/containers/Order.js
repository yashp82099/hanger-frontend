import React, { Component } from 'react'
import Map from '../components/Order/Map'
// import OrderContainer from '../components/Order/OrderContainer'
import OrderInfo from '../components/Order/OrderInfo'
// import OrderItem from '../components/Order/OrderItem'
import {connect} from 'react-redux'
import NavBar from '../components/Nav/NavBar'
import {withRouter} from 'react-router-dom'


class Order extends Component {



    render(){
    return (
        <div>
            <NavBar/>
        {this.props.selectedOrder.id? null : <div> {alert('select an order')}{this.props.history.push({pathname: '/profile'})}</div> }
            {this.props.selectedOrder.id?<Map order={this.props.selectedOrder}/>:null}
            <OrderInfo order={this.props.selectedOrder}/>
            
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {...state.order}
}

const mapDispatchToProps = (dispatch) => {
    return {select_address: (data) => dispatch({type:'SELECT_ORDER', value: data})}
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Order))
