import React, { useEffect, Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../app/models/store";
import { getCurrent } from "../../Features/reduxorganisation/orgactions";

import "../../app/layout/style/organisation.scss";
import ReactDOM from "react-dom";

// import { map } from "lodash/fp";

const OrganisationDetail: React.FC = () => {
  const currentUserOrganization = useSelector(
    (store: IStore) => store.currentUser?.organisation
  );
  const organisation = useSelector((store: IStore) => store.currentOrg);

  function htmlDecode(input:any) {
    // var text = ""; 
    //   text = organisation?.description ? organisation?.description : "" ;
    //   var e = document.createElement('div');
    //   e.innerHTML = text ? text : ""; 
    //   return {__html: e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue};
    
    //return {__html: organisation?.description};
    // If DOMParser is supported, use it
    // if (support) {
    //   var parser = new DOMParser();
    //   var doc = parser.parseFromString(str, 'text/html');
    //   return doc.body;
    // }
    //Otherwise, fallback to old-school method
    var div = document.getElementById("description-text");
     //var dom = document.createElement('p');
     if(div){
      div.innerHTML= organisation?.description ? organisation?.description : "" ;
     }
    //ReactDOM.render(div, document.getElementById('description-text'));
    return div;
  }

  return (
    <div className="organisation_view">
      {currentUserOrganization && organisation ? (
        <Fragment>
          <img
            className="organisation_logo"
            src={organisation?.imageUrl}
            alt=""
          ></img>{" "}
          <div className="organisation-content"> 
          <h2> {organisation?.companyName}</h2>
          <p><small> Senast uppdaterad: {organisation?.updatedAt}</small></p>
          <div className="organisation_description">
            <h3>Description</h3>
            <div id="description-text"> {organisation?.description}</div>
          </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h2> Details</h2>
          <p> Oops! Something wrong and it's not your fault. Try again later! </p>{" "}
        </Fragment>
      )}
    </div>
  );
};

export default OrganisationDetail;
