import React, { useEffect } from "react";
import OrganisationDetail from "./Organisation";
import SideBar from "./SideBar";
import Contact from "./Contact";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../app/models/store";
import { getCurrent } from "../../Features/reduxorganisation/orgactions";

import '../../app/layout/style/card.scss';

 const Card = () => {
  const currentUserOrganization = useSelector(
    (store: IStore) => store.currentUser?.organisation
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUserOrganization) {
      dispatch(getCurrent(currentUserOrganization));
    }
  }, [currentUserOrganization]);

  return (
    
    <div className="maincard">
      <div className="aside" > 
        <SideBar/>
    
      </div>
      <div className="main_orgside"> 
      <OrganisationDetail />
     
      </div>
      <div className="rightaside">
        <Contact/>
      </div>
    </div>
  );
};

export default Card; 