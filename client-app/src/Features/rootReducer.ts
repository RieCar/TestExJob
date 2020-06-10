import { combineReducers } from 'redux'

import userReducer from './reduxuser/userreducer'
import orgReducer from './reduxorganisation/orgreducer'
import contactReducer from './reduccontact/contactreducer'
import projectReducer from './reduxproject/projreducer'

const rootReducer = combineReducers({
    currentUser: userReducer,
    currentOrg: orgReducer,
    currentContacts: contactReducer,
    currentProject: projectReducer
   
})

export default rootReducer