const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    addresses: [],
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_USER':
            return action.value
        case 'ADD_ADDRESS':
            return {...state, addresses: [...state.addresses, action.value]}
        default: 
        return state
    }
}