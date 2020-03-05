const initialState = {
    orders: [],
    selectedOrder: {},
    coordinates: {lat: 33.691964 , log: -84.310133},
}


export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ORDER':
            // debugger
            if(state.selectedOrder.id){
                let orders = action.value.filter(order => order.id === state.selectedOrder.id)[0]
                return {...state, selectedOrder: orders}
            }else{
              return {...state, selected: action.value[0]}  
            }
            
        case 'SELECT_ORDER':
            return {...state, selectedOrder: action.value}
        case 'UNSELECT':
            return {...state, selected: {}}
        default: 
            return state
    }
}