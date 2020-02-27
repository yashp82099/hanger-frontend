const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    addresses: [],
    selectedAddress: {},
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_USER':
            return action.value
        case 'ADD_ADDRESS':
            return {...state, addresses: [...state.addresses, action.value]}
        case 'SELECT_ADDRESS': 
            return {...state, selectedAddress: action.value}
        default: 
        return state
    }
}