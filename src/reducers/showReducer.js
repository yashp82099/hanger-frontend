const initialState = {
    product: {},
    show: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return {...state,product: action.value, show: true
            }
        case 'REMOVE_PRODUCT':
            return {...initialState}
        default:
            return state
    }
}