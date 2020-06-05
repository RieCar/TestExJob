import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/index.css";
import "./app/layout/style/global.scss";

import App from "./app/App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { initializeStore } from "./Features/store";
import { Router } from "react-router-dom";
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory(); 
const store = initializeStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />       
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
