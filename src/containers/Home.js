import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductsContainer from '../components/Home/ProductsContainer'
import {Redirect, Link, withRouter} from 'react-router-dom'
import Show from './Show'
import Banner from '../components/Nav/Banner'
import {Icon,Button,Loader, Input} from 'semantic-ui-react'
import NavBar from '../components/Nav/NavBar'
import Filter from '../components/Home/Filter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './main.css'
import 'react-notifications/lib/notifications.css';
import { wait } from '@testing-library/react'


const ProductsUrl = 'http://localhost:3000/get/products'
const ProductsUrl2 = 'http://localhost:3000/get/products/2'
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
            // debugger
            console.log(data)
            let user = {first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        addresses: data.addresses,
                        drive: data.driver}
            if(data.driver){
                this.props.history.push({pathname: '/driver'})
            }
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
        return  <div>
            <ProductsContainer handleShow={this.handleShow} products={this.props.products.response.docs}/>
            </div>
        }
    }


    handleSearch = (e) => {
        e.preventDefault()
        fetch(ProductsUrl2,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                product:{
                    search: this.props.search,
                    sort: this.props.sort,
                    color: this.props.color,
                    gender: this.props.gender,
                    size: this.props.size,

                }
            })
        }).then(res => res.json())
        .then(data => this.props.getProducts(data))
        this.props.unselect()
    }


    render() {
        return (
            <div>   
                <NavBar />
                <Link to='/cart'><h2> <Icon name='shopping cart'/>:${this.props.total.toFixed(2)}-({this.props.cart.length})</h2></Link>
                <Banner/>
                <div className='formDiv'>
                    <div>
                            <form className='searchForm' onSubmit={this.handleSearch}>
                            <Input size='massive' icon='search' iconPosition='left' onChange={this.props.searchTerm} transparent placeholder='Search...' />
                            {/* <Button type='submit'></Button> */}
                            </form>  
                    </div>
                </div>
                <div className='filterBtnDiv'>
                    {this.props.selected.title? null : <Icon onClick={(e) => this.props.renderFilter()} size='large' name='filter'/>}
                </div>
                <div className='filterDiv'>
                { this.props.filterRender? <Filter /> : null }   
                </div>
                <div className='productsDiv'>
                    {this.props.products.response?
                    this.handleSelected()
                    : <Redirect to='/home'/>}  
                </div>
               
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {...state.home, ...state.cart, ...state.user, ...state.filter}
}

const mapDispatchToProps = (dispatch) => {
    return {getProducts: ((data) => dispatch({type: 'NEW_PRODUCTS', value:data})), 
            select: ((data)=> dispatch({type:'SELECT', value:data})),
            unselect: (()=> dispatch({type:'UNSELECT'})),
            addUser: ((user) => dispatch({type:'ADD_USER', value: user})),
            renderFilter: (() => dispatch({type: "RENDER_FILTER"})),
            searchTerm: ((e) => dispatch({type: 'EDIT_SEARCH', value: e.target.value}))}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))
