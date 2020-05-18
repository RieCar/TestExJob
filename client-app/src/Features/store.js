import { createStore } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

export default createStore(reducer, composeWithDevTools());