const initialState = {
    total: 0,
    cart: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            console.log(action.value.thumb_image);
            let oldProduct = [...state.cart].find( product => product.thumb_image === action.value.thumb_image)
            
            if(oldProduct){
                let newArray = [...state.cart].filter(product => product.thumb_image !== oldProduct.thumb_image)
                return {...state,cart: [...newArray, {...action.value,price: action.value.price * (oldProduct.quantity + 1), quantity: oldProduct.quantity + 1 }], total: state.total+action.total}
            }else{
                return {...state,cart: [...state.cart,{...action.value, quantity: 1}], total: state.total+action.total
            }


            }
        case 'REMOVE_FROM_CART':
            return {...initialState}
        default:
            return state
    }
}