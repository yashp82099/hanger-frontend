import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './order.css';
import {Icon, Card} from 'semantic-ui-react'
import {connect} from 'react-redux'
// import { prettyDOM } from '@testing-library/react';

class OrderInfo extends Component{


    componentDidMount(){
        if(this.props.order.status !== 'INCOMPLETE' && !this.props.driver_info.id){
            console.log('hi');
            fetch(`http://localhost:3000/get/order/driver/${this.props.order.id}`).then(res => res.json()).then(data => this.props.add_driver_info(data))
            
        }
    }

    renderAddress = (address) => {
        return <div>
            <h4>To: {address.address_1}<br/>{`${address.city} ${address.state} ${address.zip}`}</h4>
        </div>
    }

    render(){
    return (
        <div className='orderDiv'>
            <div>
                {console.log(this.props.order)}
                <h2 className='orderNumber'>Order Info: #{this.props.order.id}</h2>
                {this.props.order.address? this.renderAddress(this.props.order.address): null}
                <br/>
                <Icon size='big' name='credit card outline'>(...{this.props.order.last_4})</Icon>
                <br/>
                <h4>Order Status: {this.props.order.status}</h4>
                <div className='driverInfo'>
                {this.props.driver_info.id && this.props.order.status !== 'INCOMPLETE'?<Card>
                    <Card.Content header={`${this.props.driver_info.first_name} ${this.props.driver_info.last_name}`} />
                    <p>{this.props.driver_info.car} <br/> {this.props.driver_info.model} <br/> {this.props.driver_info.color}</p>
                    <Card.Content extra>
                    <Icon name='user' />4 Friends
                    </Card.Content>
                </Card>
                :
                <Card>
                    <Card.Content description= 'Waiting from the driver to talk your order' />
                </Card>}
                </div>
                <div className='productCard'>
                {this.props.order.products? this.props.order.products.map((product, key) => <ProductCard product={product} info={this.props.order.order_products[key]} />) : null }
                </div>
               
            </div>
        </div>
    )}
}

const mapStateToProps = (state) =>{
    return {...state.driver_info}
}

const mapDispatchToProps = (dispatch) =>{
    return {add_driver_info: (data) => dispatch({type:'ADD_DRIVER', value:data})}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo)
