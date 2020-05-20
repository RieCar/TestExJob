import React from "react";
import OrganisationDetail from "./Organisation";
import SideBar from "../../app/layout/SideBar";


 const Card = () => {
  return (
    <div className="maincard">
      <div className="aside" > 
        <SideBar/>
    
      </div>
      <div className="main_orgside"> 
      <OrganisationDetail />
      </div>
    </div>
  );
};

export default Card; 