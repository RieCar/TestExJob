import React, { useState, useEffect, Fragment } from "react";

import { IOrganisation } from "../../app/models/organisation";
// import {initializeStore} from "../../Features/store";
import agent from "../../app/api/agent";
import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";
const OrganisationDetail = () => {
  
  const [organisation, setOrganistion ] = useState<IOrganisation | null>(null);
  const currentUserOrganization = useSelector((store: IStore) => store.currentUser?.organisation)
  
  useEffect(() => {
    if (currentUserOrganization) {
      agent.Organisations.details(currentUserOrganization).then((response) => {
        setOrganistion(response);
        console.log(response);
      });
    }
  }, [currentUserOrganization]);

  return (
    <div className="App">
      {organisation ? (<Fragment>
      <h2> {organisation?.companyName}</h2>
      <h3>Logo</h3>
      <p><img src={organisation?.imageUrl} alt=""></img> </p>
      <h3>Description</h3>
      <p> {organisation?.customerDescription}</p>
       </Fragment>) 
      : (<Fragment><h2> Details</h2>
      <p> Du måste vara inloggad för att se innehållet här </p> </Fragment>)
      }
    </div>
  );
};

export default OrganisationDetail;
