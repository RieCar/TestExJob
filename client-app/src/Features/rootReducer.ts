import { combineReducers } from 'redux'

import userReducer from './userreducer'
import orgReducer from './orgreducer'

const rootReducer = combineReducers({
    currentUser: userReducer,
    currentOrg: orgReducer
})

export default rootReducer