const initialState = {
    driver_info: {}
}


export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_DRIVER':
            return {driver_info: action.value}
        case 'REMOVE_DRIVER':
            return {...initialState}
        default: 
        return state
    }
}

