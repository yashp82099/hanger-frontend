const initialState = {
    driver: {},
    orders: [],
    selectedOrder: {},
}


export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ORDERS':
            return {...state, orders: action.value}
        case 'ADD_DRIVER':
            return {...state, driver: action.value}
        case 'SELECT_ORDER':
            return {...state, selectedOrder: action.value}
        case 'REMOVE_ORDER':
            let newOrders = state.orders.filter(order => order.id !== action.value.id)
            return {...state, selectedOrder: {}, orders: newOrders}
        default: 
        return state
    }
}

