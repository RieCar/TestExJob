import { combineReducers } from 'redux'

import userReducer from './reduxuser/userreducer'
import orgReducer from './reduxorganisation/orgreducer'
import contactReducer from './reduccontact/contactreducer'
import projectReducer from './reduxproject/projreducer'
import orderReducer from './reduxorder/orderreducer'
import contractReducer from './contracts/contractreducer'

const rootReducer = combineReducers({
    currentUser: userReducer,
    currentOrg: orgReducer,
    currentContacts: contactReducer,
    currentProject: projectReducer,
    currentOrder: orderReducer,
    currentContract: contractReducer
   
})

  
 
export default (state:any, action:any) =>
  rootReducer(action.type === 'LOGOUT_USER' ? undefined : state, action);
//export default rootReducer