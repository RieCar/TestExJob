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

  function createMarkup () {
    //return {__html: organisation?.description};
    // If DOMParser is supported, use it
    // if (support) {
    //   var parser = new DOMParser();
    //   var doc = parser.parseFromString(str, 'text/html');
    //   return doc.body;
    // }
  
    // Otherwise, fallback to old-school method
    // var div = document.getElementById("description-text"); 
    //  //var dom = document.createElement('p');
  
    //  if(div){
    //   div.innerHTML= str;
    //  }
   
 
   
    //ReactDOM.render(dom, document.getElementById('description-text'));
    // return div;
  
  };

  return (
    <div className="organisation_view">
      {currentUserOrganization && organisation ? (
        <Fragment>
        
            <img className="organisation_logo" src={organisation?.imageUrl} alt=""></img>{" "}
     
          <h2> {organisation?.companyName}</h2>
          <p> Senast uppdaterad: {organisation?.updatedAt}</p>

          <div className="organisation_description">           
            <h3>Description</h3>
            <p id="description-text"> {organisation?.description}</p>
            {/* //<p>  dangerouslySetInnerHTML={createMarkup()} </p> */}
          
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
