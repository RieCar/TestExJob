import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

// Root Saga and Reducer
import sagas from './sagas'
import reducers from './rootReducer'

// Initial store
const initialStore = {}

export const initializeStore = (initialState = initialStore) => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(sagas);

    return store;
}