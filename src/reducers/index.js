import { combineReducers } from 'redux'
import dummyReducer from './dummyReducer'
import postReducer from './postReducer'
import tagReducer from './tagReducer'

const rootReducer = combineReducers({
    dummy: dummyReducer,
    post: postReducer,
    tag: tagReducer,
})

export default rootReducer