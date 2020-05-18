import { combineReducers } from 'redux'

import userReducer from './userreducer'

const rootReducer = combineReducers({
    currentUser: userReducer 
})

export default rootReducer