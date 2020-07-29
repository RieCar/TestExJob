import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootSaga from './rootSagas'
import rootReducer from './rootReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'currentUser'
    ]
}

const initialStore = {
   
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const initializeStore = (initialState = initialStore) => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);

    let persistor = persistStore(store)
    return { store, persistor }
} 
