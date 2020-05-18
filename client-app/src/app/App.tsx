import React, { useState, useEffect, Fragment } from "react";

import { IOrganisation } from "../app/models/organisation";
// import agent from "./api/agent";

import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../Components/home/HomePage";
import Card from "../Components/CustomerCard/Card";
import { NavBar } from "../Components/nav/NavBar";

function App() {
  const [organisation, setOrganistion] = useState<IOrganisation[]>([]);
  const [user, setUser] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    var isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      setUser(true);
    }
  };

  const handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setUser(false);
  };
  // const currentUserorg = store.currentUser?.organisation;
  // useEffect(() => {
  //   agent.Organisations.list().then((response) => {
  //     setOrganistion(response);
  //   });
  // }, []);

  return (
    <div className="App">
      <Fragment>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route
            path={"/(.+)"}
            render={() => (
              <Fragment>
                <NavBar />
                <Route exact path="/Card" component={Card} />
              </Fragment>
            )}
          />
            {/* {" "} */}
          {/* </Route> */}
        </Router>
      </Fragment>
      {/* <ul>
          {organisation.map((organisation) => (
            <li key={organisation.customerId}>
              {" "}
              {organisation.companyName}
              <p> {organisation.customerDescription}</p>
              <img src={"http:" + organisation.imageUrl} alt=""></img>
            </li>
          ))}
        </ul> */}
    </div>
  );
}

export default App;
