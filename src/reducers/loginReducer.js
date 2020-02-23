const initialState = {
    username: '',
    password: '',
    render: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_INPUT':
            return {
                ...state,
                [action.name]: action.value
            }
        case 'RESET_INPUT':
            return {username: '',
                    password: '',
                    render: true}
        default:
            return state
    }
}