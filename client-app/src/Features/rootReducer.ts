import { combineReducers } from 'redux'

import userReducer from './userreducer'
import orgReducer from './orgreducer'
import contactReducer from './contactreducer'

const rootReducer = combineReducers({
    currentUser: userReducer,
    currentOrg: orgReducer,
    currentContacts: contactReducer,
   
})

export default rootReducer