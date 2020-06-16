import React, { useEffect, Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../app/models/store";
import { getCurrent } from "../../Features/reduxorganisation/orgactions";

import "../../app/layout/style/organisation.scss";
import ReactDOM from "react-dom";
import { IOrganisation } from "../../app/models/organisation";

import _ from 'lodash';


const OrganisationDetail: React.FC = () => {
 
  const currentUserOrganization = useSelector(
    (store: IStore) => store.currentUser?.organisation
  );
  const organisation = useSelector((store: IStore) => store.currentOrg);

  const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown');

   function transformtoHtml(input:string | undefined) {
    //const copy = input;

    if(!input){
      return null; 
    }
    console.log(input);
    return  richTextFromMarkdown(input);
  }
var desc = transformtoHtml(organisation?.description); console.log(desc);
//   async function Decode(input:any){
//   const document = await richTextFromMarkdown(input);
//   let homeArray = new Array(document.length);
// let i = 0

// for (var key in document) {
//     homeArray[i] =  document[key];
//     i = i + 1;
// }
//  console.log(homeArray);

 
//   return {__html : homeArray}; 
// }
//  var desc = Decode(organisation?.description).then(resp => resp.__html); 

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
      <div id="description-text" >{organisation.description} </div>
      {/* <div> {desc}</div> */}
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
