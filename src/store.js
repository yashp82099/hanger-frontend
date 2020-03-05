import {createStore, combineReducers} from 'redux'

import loginReducer from './reducers/loginReducer'
import signupReducer from './reducers/signupReducer'
import homeReducer from './reducers/homeReducer'
import showReducer from './reducers/showReducer'
import cartReducer from './reducers/cartReducer'
import userReducer from './reducers/userReducer'
import addressReducer from './reducers/addressReducer'
import orderReducer from './reducers/orderReducer'
import searchReducer from './reducers/searchReducer'
import driverReducer from './reducers/driverReducer'
import locationReducer from './reducers/locationReducer'
import driverInfoReducer from './reducers/driverInfoReducer'




const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    home: homeReducer,
    show: showReducer,
    cart: cartReducer,
    user: userReducer,
    address: addressReducer,
    order: orderReducer,
    filter: searchReducer,
    driver: driverReducer,
    location: locationReducer,
    driver_info: driverInfoReducer,
})


export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)