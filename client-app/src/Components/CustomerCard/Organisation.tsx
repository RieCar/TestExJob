import React, { useEffect, Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../app/models/store";
import { getCurrent } from "../../Features/orgactions";

import "../../app/layout/style/organisation.scss";
// import Contact from "./Contact";
// import { getAllByOrg } from "../../Features/contactactions";
// import { IContact } from "../../app/models/contact";
// import { map } from "lodash/fp";

const OrganisationDetail: React.FC = () => {
  const currentUserOrganization = useSelector(
    (store: IStore) => store.currentUser?.organisation
  );
  const organisation = useSelector((store: IStore) => store.currentOrg);

  const currentContacts = useSelector((store: IStore) => store.currentContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUserOrganization) {
      dispatch(getCurrent(currentUserOrganization));
    }
  }, [currentUserOrganization]);

  function ListItems(props: any) {
    var currentList = props.items;
  currentList?.map((item:any)=> (
     console.log(item.Description)
   ))
    const list = (
      <div>
        <ul>
          {currentList?.map((item: any) => (
            <li key={item.id}>{item.titel}
            </li>
          ))}
        </ul>
      </div>
    );
    return <div>{list}</div>;
  }

  return (
    <div className="organisation_view">
      {currentUserOrganization && organisation ? (
        <Fragment>
           <p className="organisation_logo">
            <img src={organisation?.imageUrl} alt=""></img>{" "}
          </p>
          <h2> {organisation?.companyName}</h2>
          <p> Senast uppdaterad: {organisation?.updatedAt}</p>

          <div className="organisation_description">           
            <h3>Description</h3>
            <p> {organisation?.description}</p>
            <h3>
              Projekt <span>({organisation?.projects?.length}) </span>
            </h3>
            <ListItems items={organisation?.projects} />
            <h3>
              {" "}
              Beställningar <span>({organisation?.orders?.length})</span>
            </h3>
            <ListItems items={organisation?.orders} />
            <h3> Kontrakt</h3>
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
