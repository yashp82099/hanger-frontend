const initialState = {
    lat: 33.793210,
    long: -84.395570  
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE':
            return {lat: action.value.lat, long: action.value.long}
        default: 
            return state
    }
}