import React, { Component } from 'react'
import Map from '../components/Order/Map'
import OrderContainer from '../components/Order/OrderContainer'
import OrderInfo from '../components/Order/OrderInfo'
import OrderItem from '../components/Order/OrderItem'
import {connect} from 'react-redux'
import NavBar from '../components/Nav/NavBar'


class Order extends Component {


    componentWillMount(){
        fetch('http://localhost:3000/get/orders',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                "Token": localStorage.getItem('token')
            }
        }).then(res => res.json())
        .then(data => {
            this.props.select_order(data[0])
            this.props.add_order(data)
            
            console.log(data)})
    }

    handleClick = (data) => {
        this.props.select_order(data)
    }


    render(){
    return (
        <div>
            <NavBar/>
            <OrderContainer handleClick={this.handleClick} orders={this.props.orders} />
            <Map coordinates={this.props.coordinates}/>
            <OrderInfo order={this.props.selectedOrder}/>
            
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {...state.order}
}

const mapDispatchToProps = (dispatch) => {
    return {add_order: (data) => dispatch({type: 'ADD_ORDER', value: data}),
            select_order: (data) => dispatch({type:'SELECT_ORDER', value: data}) }
}


export default connect(mapStateToProps, mapDispatchToProps)(Order)
