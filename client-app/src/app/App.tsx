import React, { useState, useEffect, Fragment } from "react";

import { IOrganisation } from "../app/models/organisation";
// import agent from "./api/agent";

import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import HomePage from "../Components/home/HomePage";
import Card from "../Components/CustomerCard/Card";
import { PageLayout } from "./layout/LayoutPage";
import NotFound from "./layout/NotFound";
import { history } from "../index";
import Register from "../Components/user/Register";
import { useSelector } from "react-redux";
import { IStore } from "./models/store";
import Login from "../Components/user/Login";

function App() {
  const currentUser = useSelector(
    (store: IStore) => store.currentUser);
    console.log('token', currentUser?.token);
  return (
    <div className="App">
      <PageLayout>
        <Fragment>
              <Fragment>
                <Switch> 
                <Route exact path="/" component={HomePage} />
                  <Route exact path="/Login" component={Login}/>               
                  <PrivateRoute exact path="/Card" isToken={currentUser?.token} component={Card} />
                 
                  <Route component={NotFound} />
                  <Route component={Register} />
                 
                </Switch>
              </Fragment>
        </Fragment>
      </PageLayout>
    </div>
  );
}

export default App;

const PrivateRoute = ({ component:Component, isToken, ...rest }:any) => (
 
  <Route {...rest} render={(props) => (
    
      isToken !== undefined
      ? <Component {...props} />
      : <Redirect to='/Login' />
  )} />
  
)