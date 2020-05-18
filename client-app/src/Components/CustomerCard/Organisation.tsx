import React, { useState, useEffect } from "react";

import { IOrganisation } from "../../app/models/organisation";
import {initializeStore} from "../../Features/store";
import agent from "../../app/api/agent";
const OrganisationDetail = () => {
  // grab current state
  const userOrg = window.localStorage.getItem("organisation");
  // const state = store.getState();

  // get the orgid out 
  //const userOrg = state.currentUser?.organisation;
  console.log(userOrg);
  const [selectedorganisation, setselectedOrganistion,] = useState<IOrganisation | null>(null);

  useEffect(() => {
    if (userOrg) {
      agent.Organisations.details(userOrg).then((response) => {
        setselectedOrganistion(response);
        console.log(response);
      });
    }
  }, [userOrg]);

  return (
    <div className="App">
      <h2>Details</h2>
      <h2>{selectedorganisation?.companyName}</h2>
      <p> {selectedorganisation?.customerDescription}</p>
      <img src={selectedorganisation?.imageUrl} alt=""></img>
    </div>
  );
};

export default OrganisationDetail;
