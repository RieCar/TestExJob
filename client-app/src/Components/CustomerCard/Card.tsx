import React from "react";
import OrganisationDetail from "./Organisation";
import SideBar from "../../app/layout/SideBar";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";



 const Card = () => {
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