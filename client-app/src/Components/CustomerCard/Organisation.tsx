import React, { useEffect, Fragment, useState } from "react";

import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";

import "../../app/layout/style/organisation.scss";

// import _, { orderBy } from "lodash";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
// import ReactDOM from "react-dom";

const OrganisationDetail: React.FC = () => {
  const currentUserOrganization = useSelector(
    (store: IStore) => store.currentUser?.data.organisation
  );
  const organisation = useSelector((store: IStore) => store.currentOrg);

  // const [Markdown, setNewMarkdown] = useState({
  //   content: []});

  // var body = new Array;

  // useEffect(() => {
  //   const transformMarkdown = async (content: string | undefined) => {
  //     if (!content) {
  //       return null;
  //     }
  //     console.log("inuti", content);
  //     return await richTextFromMarkdown(content);
  //   };

  //  transformMarkdown (organisation?.description).then((content) => {
  //     body = content
  //     setNewMarkdown(content)
  //     console.log(body)
  //     return body;
  
  //   });
  // }, [organisation?.description]);


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
            <p>
              <small> Senast uppdaterad: {organisation?.updatedAt}</small>
            </p>
            <div className="organisation_description">
              <h3>Description</h3>
              <div id="description-text">
                {organisation?.description}
          
              </div>
              <div>
              {/* {body.map(function(content, i){
                console.log("content", content)
                return content(i)
              })} */}
            
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h2> Details</h2>
          <p>
            {" "}
            Oops! Something wrong and it's not your fault. Try again later!{" "}
          </p>{" "}
        </Fragment>
      )}
    </div>
  );
};

export default OrganisationDetail;
