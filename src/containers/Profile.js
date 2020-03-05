import React, { Component } from 'react'
import NavBar from '../components/Nav/NavBar'
import AddressContainer from '../components/Profile/AddressContainer'
import OrdersContainer from '../components/Profile/OrdersContainer'
import {Image} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './main.css'



const UserApi = 'http://localhost:3000/get/user'
export class Profile extends Component {


    state = {
        image: '',
        phone: '',
        first_name:'',
        last_name:'',
        addresses: [],
        username: '',
        orders: [],
    }

    componentDidMount(){
        this.fetchUser()
    }

    handleSelect = (data) => {
        console.log(data);
        this.props.select_address(data)
        this.props.history.push({pathname: '/order'})
        
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
            console.log(data)
            this.setState({
                image: data.image,
                phone: data.phone_number,
                first_name:data.first_name,
                last_name:data.last_name,
                addresses: data.addresses,
                username: data.username,
                orders: data.orders
            })
            if(data.driver){
                this.props.history.push({pathname: '/driver'})
            }
        })
    }

    handleUpdate = () =>{
        // this.props.
    }



    render() {
        return (
            <div>
                <NavBar />
                {this.props.selectedOrder.id? this.handleUpdate() : null }
                <div className='infoDiv'>
                  <div className='profileInfo'>
                  <Image centered src={this.state.image} rounded width='200vh' height='200vh' circular />
                    <h1>{this.state.first_name} {this.state.last_name}</h1>
                    <h4>username : {this.state.username}</h4>
                    <h4>Phone : {this.state.phone}</h4>  
                </div>
                
                <div className='profileAddress'>
                {this.state.addresses.length > 0? <AddressContainer addresses={this.state.addresses}/>: null}
                </div>  
                </div>
                <div className='orderInfo'>
                    {this.state.orders.length > 0? <OrdersContainer handleSelect={this.handleSelect} orders={this.state.orders}/>: null}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {...state.order}
}

const mapDispatchToProps = (dispatch) => {
    return {select_address: (data) => dispatch({type:'SELECT_ORDER', value: data})}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
