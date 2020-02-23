const initialState = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
    phone_number: '',
    render: false
}
// (:first_name, :last_name, :username, :password, :email, :phone_number)

export default (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_INPUT':
            return{...state,
            [action.name]:action.value}
        case 'RESET_INPUT':
            return {...initialState, render: true}
        default:
            return state

    }
}