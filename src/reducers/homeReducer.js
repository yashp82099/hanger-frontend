const initialState = {
    products:[],
    selected: {},
}


export default (state = initialState, action) => {
    switch(action.type){
        case 'NEW_PRODUCTS':
            return {...state, products: action.value}
        case 'SELECT':
            return {...state, selected: action.value}
        case 'UNSELECT':
            return {...state, selected: {}}
        default: 
            return state
    }
}