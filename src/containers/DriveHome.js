import React, { Component } from 'react'
import {connect} from 'react-redux'
import OrdersContainer from '../components/Driver/OrdersContainer'
import SelectOrder from '../components/Driver/SelectOrder'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './main.css'
// import OrderContainer from '../components/Order/OrderContainer'





const update = 'http://localhost:3000/orders/'
const update2 = 'http://localhost:3000/order/done/'
const get_order = 'http://localhost:3000/get/driver/order'
const UserApi = 'http://localhost:3000/get/user'
export class DriveHome extends Component {

    componentDidMount(){
        this.fetchUser()
        // <ActionCableConsumer channel={{channel: "DriverChannel"}} onReceived={() => this.fetchOrder()} />
    }

    fetchUser = () => {
        fetch(UserApi,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Token': localStorage.getItem('token')
            }
        }).then(res => res.json())
        .then(data => {
            // debugger
            console.log(data)
            let user = {first_name: data.first_name,
                        img: data.image,
                        last_name: data.last_name,
                        email: data.email,
                        addresses: data.addresses,
                        drive: data.driver,
                        phone: data.phone_number,
                        username: data.username,
                        model: data.model,
                        car: data.car,
                        color: data.color,
                    }

            this.props.add_driver(user)
            this.fetchOrder()
        })
    }


    fetchOrder = () => {
        fetch(get_order,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Token':localStorage.getItem('token')
            }
        }).then(res=> res.json())
        .then(data => {
            console.log(data);
            // debugger
            if(data.id){
                this.props.select_order(data)
            }else{
                this.props.add_order(data)  
            }
            
        })
    }


    handleSelect = (order) => {
        console.log(order);
        fetch(update+`${order.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Token': localStorage.getItem('token')
            }
        })
        this.props.select_order(order)
    }


    handleComplete = (order) =>{
        fetch(update2+`${order.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                'Token': localStorage.getItem('token')
            }
        })
        this.props.remove_order(order)
        // this.setState({ props: this.props })
        
    }

   


    render() {
        return (
            <div>
                
                <ActionCableConsumer channel={{channel: "DriverChannel"}} onReceived={() => this.fetchOrder()} />
                <Link to='/'>
                <Menu.Item>
                    LogOut
                </Menu.Item>
                </Link>
                {setInterval(()=>navigator.geolocation.getCurrentPosition((location)=>{
                    console.log(this.props.selectedOrder)
                    fetch('http://localhost:3000/location',{
                        method: 'POST',
                        headers:{
                            'Content-Type':'application/json',
                            'Token': localStorage.getItem('token')
                        },
                        body: JSON.stringify({
                            order:{
                                lat: location.coords.latitude,
                                long: location.coords.longitude}
                        })
                    })
                    }), 15000)}
                    <div className='driveDiv'>
                        {this.props.selectedOrder.id? <SelectOrder  handleComplete={this.handleComplete} order={this.props.selectedOrder} />: <div>
                            <div className='driverProfileInfo'>
                            {this.props.driver?<div className='driverProfile'>
                            <Image centered src={this.props.driver.img} rounded width='200vh' height='200vh' circular />
                            <h1>{this.props.driver.first_name} {this.props.driver.last_name}</h1>
                            <h4>E-Mail : {this.props.driver.email} | Phone : {this.props.driver.phone} | Username : {this.props.driver.username}</h4>
                            <h4>Car : {this.props.driver.model} - {this.props.driver.color} | Plates : {this.props.driver.car}</h4>
                            </div>:null}

                            </div>
                            <div className='DriveOrders'>
                            
                            <OrdersContainer handleSelect={this.handleSelect} orders={this.props.orders} /></div></div>}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (props) => {
    return {...props.driver}
}

const mapDispatchToProps = (dispatch) =>{
    return {add_order: (data)=>dispatch({type:'ADD_ORDERS', value: data}),
            add_driver: (data)=>dispatch({type:'ADD_DRIVER', value: data}),
            select_order: (data)=>dispatch({type:'SELECT_ORDER', value: data}),
            remove_order: (data)=> dispatch({type: 'REMOVE_ORDER', value: data})}
}


export default connect(mapStateToProps,mapDispatchToProps)(DriveHome)
