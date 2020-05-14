import { combineReducers } from 'redux'

import userReducer from './User/userReducer'

const rootReducer = combineReducers({
    currentUser: userReducer 
})

export default rootReducer
