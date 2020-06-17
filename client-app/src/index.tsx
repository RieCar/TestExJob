import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import "./app/layout/index.css";
import "./app/layout/style/global.scss";

import App from "./app/App";
import * as serviceWorker from "./serviceWorker";


import { initializeStore } from "./Features/store";


export const history = createBrowserHistory(); 
const { store, persistor } = initializeStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <App />       
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
