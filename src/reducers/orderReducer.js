const initialState = {
    orders: [],
    selectedOrder: {},
    coordinates: {lat: 33.691964 , log: -84.310133},
}


export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ORDER':
            return {...state, orders: action.value}
        case 'SELECT_ORDER':
            return {...state, selectedOrder: action.value}
        case 'UNSELECT':
            return {...state, selected: {}}
        default: 
            return state
    }
}