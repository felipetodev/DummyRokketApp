const initState = {
    user: []
}

const dummyReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_DUMMY":
            return {...state, 
                user: action.payload.user,
            }
        default:
            return {...state}
    }
}

export default dummyReducer