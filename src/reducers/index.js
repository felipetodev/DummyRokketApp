import { combineReducers } from 'redux'
import dummyReducer from './dummyReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
    dummy: dummyReducer,
    post: postReducer,
})

export default rootReducer