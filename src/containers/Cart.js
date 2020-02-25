import React from 'react'
import ListContainer from '../components/Cart/ListContainer'
import Banner from '../components/Nav/Banner'
import {Icon} from 'semantic-ui-react'
import NavBar from '../components/Nav/NavBar'
import AddressContainer from '../components/Cart/AddressContainer'
import CheckOut from '../components/Cart/CheckOut'

function Cart() {
    return (
        <div>
            <NavBar/>
            <ListContainer />
            <AddressContainer />
            <CheckOut />
        </div>
    )
}

export default Cart
