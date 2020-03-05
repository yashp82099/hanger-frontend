const initialState = {
    filterRender: false,
    search: 't-shirt',
    color: '',
    size: '',
    gender: '',
    sort: ''
}


export default (state = initialState, action) => {
    switch(action.type){
        case 'EDIT_SEARCH':
            return {...state, search: action.value}
        case 'EDIT_FILTER':
            let value

            switch(action.value){
                case 'Low - High':
                    value = 'low'
                    break
                case 'High - Low':
                    value = 'high'
                    break
                case 'Rating':
                    value = 'rate'
                    break
                case 'Popular':
                    value = 'popular'
                    break
                case 'Extra Small':
                    value ='xs'
                    break
                case 'Small':
                    value ='s'
                    break
                case 'Medium':
                    value ='m'
                    break
                case 'Large':
                    value ='l'
                    break
                case 'Extra':
                    value ='xl'
                    break
                default:
                    value = action.value.toLowerCase()
                    break
            }

            return {...state, [action.name]: value}
        case 'RESET':
            return {initialState}
        case 'RENDER_FILTER':
            return {...state, filterRender: !state.filterRender}

        default:
            return state
    }
}