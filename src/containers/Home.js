import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductsContainer from '../components/Home/ProductsContainer'
import {Redirect, Link} from 'react-router-dom'
import Show from './Show'
import Banner from '../components/Nav/Banner'
import {Icon} from 'semantic-ui-react'
import NavBar from '../components/Nav/NavBar'


const ProductsUrl = 'http://localhost:3000/get/products'
const UserApi = 'http://localhost:3000/get/user'

export class Home extends Component {


    componentDidMount(){
        this.fetchUser()
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
            let user = {first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        addresses: data.addresses}
            this.props.addUser(user)
            this.fetchPlace()
        })
    }


    fetchPlace = () => {
        fetch(ProductsUrl).then(res => res.json()).then(data => {
            this.props.getProducts(data)
        })
        
        this.props.unselect()
    }


    handleShow = (product) => {
        // c/onsole.log(product);
        if(this.props.selected.brand){
            console.log('u')
            this.props.unselect()
        }else{
            console.log('s')
            this.props.select(product)
        }

    }


    handleSelected = () => {
        if(this.props.selected.title){
            return <Show product={this.props.selected} unselect={this.props.unselect}/>
        }else{
            return <ProductsContainer handleShow={this.handleShow} products={this.props.products.response.docs}/> 
        }
    }


    render() {
        return (
            <div>
                <NavBar />
               <Link to='/cart'><h2> <Icon name='shopping cart'/>:${this.props.total.toFixed(2)}-({this.props.cart.length})</h2></Link>
                <Banner/>
                {this.props.products.response?
                this.handleSelected()
                : <Redirect to='/home'/>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {...state.home, ...state.cart, ...state.user}
}

const mapDispatchToProps = (dispatch) => {
    return {getProducts: ((data) => dispatch({type: 'NEW_PRODUCTS', value:data})), 
            select: ((data)=> dispatch({type:'SELECT', value:data})),
            unselect: (()=> dispatch({type:'UNSELECT'})),
            addUser: ((user) => dispatch({type:'ADD_USER', value: user}))}
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
