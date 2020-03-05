const initialState = {
    name: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip: ''
}


export default (state = initialState, action) => {
    switch(action.type){
        case 'EDIT_ADDRESS':
            return {...state, [action.name]: action.value}
        case 'RESET_FORM':
            return {...initialState}
        default: 
        return state
    }
}