import React from "react";
import OrganisationDetail from "./Organisation";
// import { Header } from "../Header";
// import { NavBar } from "../nav/NavBar";

 const Card = () => {
  return (
    <div className="maincard">
      {/* <Header /> 
      <NavBar /> */}
      <h1>Dashboard</h1>
      <p>Secret Page</p>
      {/* <button>Log Out</button> */}
      <OrganisationDetail />
    </div>
  );
};

export default Card; 