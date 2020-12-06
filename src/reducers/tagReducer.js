const initState = { tag: [] }

const tagReducer = (state=initState, action) => {
    switch(action.type) {
        case "GET_TAG":
            return {
                ...state,
                tag: action.payload.tag
            }
        case "CLEAR_TAG":
            return {
                ...state,
                tag: [],
            }
        default:
            return {...state}
    }
}

export default tagReducer