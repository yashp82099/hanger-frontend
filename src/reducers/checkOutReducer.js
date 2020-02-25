initialState = {
    products: [],
    address: [],
    long: 0,
    lat: 0,
    orderNumber: '',
    last4: 0,
}

export default (state => initialState, action ) => {
    switch(action.type){

        case 'ADD_PRODUCTS':{}

        default:
            return state
    }
}