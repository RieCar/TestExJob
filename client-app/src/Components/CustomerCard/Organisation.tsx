import React, { useEffect, Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../app/models/store";
import { getCurrent } from "../../Features/orgactions";

import "../../app/layout/style/organisation.scss";

// import { map } from "lodash/fp";

const OrganisationDetail: React.FC = () => {
  const currentUserOrganization = useSelector(
    (store: IStore) => store.currentUser?.organisation
  );
  const organisation = useSelector((store: IStore) => store.currentOrg);



  return (
    <div className="organisation_view">
      {currentUserOrganization && organisation ? (
        <Fragment>
        
            <img className="organisation_logo" src={organisation?.imageUrl} alt=""></img>{" "}
     
          <h2> {organisation?.companyName}</h2>
          <p> Senast uppdaterad: {organisation?.updatedAt}</p>

          <div className="organisation_description">           
            <h3>Description</h3>
            <p> {organisation?.description}</p>
           
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h2> Details</h2>
          <p> Du måste vara inloggad för att se innehållet här </p>{" "}
        </Fragment>
      )}
    </div>
  );
};

export default OrganisationDetail;
