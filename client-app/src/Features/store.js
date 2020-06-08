import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSagas'
import rootReducer from './rootReducer'

// Initial store
const initialStore = {
   
}

export const initializeStore = (initialState = initialStore) => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);

    return store;
} 
// export default createStore(reducer, composeWithDevTools());