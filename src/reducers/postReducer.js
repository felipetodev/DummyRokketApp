const initState = { post: [], isLoading: true }

const postReducer = (state=initState, action) => {
    switch(action.type) {
        case "GET_POST":
            return {
                ...state,
                post: action.payload.post,
                isLoading: false,
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state}
    }
}

export default postReducer