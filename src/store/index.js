import { combineReducers } from 'redux'
import user from './userReducer'

const rootReducer = combineReducers({
    user: user
})

export default rootReducer