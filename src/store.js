import {createStore, combineReducers} from 'redux'

import loginReducer from './reducers/loginReducer'
import signupReducer from './reducers/signupReducer'


const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
})


export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)