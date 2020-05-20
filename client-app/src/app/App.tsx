import React, { useState, useEffect, Fragment } from "react";

import { IOrganisation } from "../app/models/organisation";
// import agent from "./api/agent";

import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../Components/home/HomePage";
import Card from "../Components/CustomerCard/Card";
import { PageLayout } from "./layout/LayoutPage";

function App() {
  // const [organisation, setOrganistion] = useState<IOrganisation[]>([]);

  // const currentUserorg = store.currentUser?.organisation;
  // useEffect(() => {
  //   agent.Organisations.list().then((response) => {
  //     setOrganistion(response);
  //   });
  // }, []);

  return (
    <div className="App">
      <PageLayout> 
      <Fragment>
          <Route exact path="/" component={HomePage} />
          <Route
            path={"/(.+)"}
            render={() => (
              <Fragment>
             
                <Route exact path="/Card" component={Card} />
              </Fragment>
            )}
          />
      </Fragment>
        </PageLayout>
    </div>
  );
}

export default App;
