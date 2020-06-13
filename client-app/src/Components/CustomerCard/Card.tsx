import React, { useEffect, Fragment, useState } from "react";
import OrganisationDetail from "./Organisation";
import SideBar from "./SideBar";
import Contact from "./Contact";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../app/models/store";
import { getCurrent } from "../../Features/reduxorganisation/orgactions";

import "../../app/layout/style/card.scss";
//import { getProjectDetails } from "../../Features/reduxproject/projactions";
import ProjectDetail from "../detailedView/Project";
import OrderDetail from "../detailedView/Order";

const Card = () => {
  const currentUserOrganization = useSelector(
    (store: IStore) => store.currentUser?.organisation
  );
  const currentOrderId = useSelector(
    (store: IStore) => store.currentOrder?.id
  );
  const currentProjectId = useSelector(
    (store: IStore) => store.currentProject?.id
  );

  console.log("orderID in CArd: ", currentOrderId);
  console.log("projectID in CArd: ", currentProjectId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUserOrganization) {
      dispatch(getCurrent(currentUserOrganization));
    }

  }, [currentUserOrganization,currentOrderId]);

  return (
    <div className="maincard">
      <div className="aside">
        <SideBar />
      </div>
      <div className="main_orgside">
        <OrganisationDetail />
        <OrderDetail/>
        <div className="clearfix"></div>
        <ProjectDetail />
            
      </div>
      <div className="rightaside">
        <Contact />
        <div className="message-box"> 
        <h3>Message</h3>
        <p> </p>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default Card;
