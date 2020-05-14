import React,{useState, useEffect} from "react"
import axios from 'axios'; 

import {IOrganisation} from "../../app/models/organisation"
import store from '../../Features/store'
const OrganisationDetail = () => {
 

 
   // grab current state
   //const userOrg = window.localStorage.getItem("organisation");
   const state = store.getState();
 
   // get the JWT token out of it
   // (obviously depends on how your store is structured)
   const userOrg = state.currentUser.organisation;
   
  const [selectedorganisation, setselectedOrganistion ] = useState<IOrganisation | null>(null);
  
useEffect(() =>{
  axios
  .get<IOrganisation>('http://localhost:5000/api/organisation/',{
    params:{
      name: userOrg
    }
  })
    .then((response)=> {
        setselectedOrganistion(response.data)
        console.log(response.data)
    });
},[]);

    return (
      <div className="App">  
       <h2>Details</h2>
        <h2>{selectedorganisation?.companyName}</h2>
    <p> {selectedorganisation?.customerDescription}</p>
    <img src ={selectedorganisation?.imageUrl}></img>
          
      </div>
    )
  }

  export default OrganisationDetail