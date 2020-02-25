import {createStore, combineReducers} from 'redux'

import loginReducer from './reducers/loginReducer'
import signupReducer from './reducers/signupReducer'
import homeReducer from './reducers/homeReducer'
import showReducer from './reducers/showReducer'
import cartReducer from './reducers/cartReducer'
import userReducer from './reducers/userReducer'
import { useHistory } from 'react-router-dom'
import { useReducer } from 'react'



const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    home: homeReducer,
    show: showReducer,
    cart: cartReducer,
    user: userReducer,
})


export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)