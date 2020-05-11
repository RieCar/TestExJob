import React,{useState, useEffect} from "react"
import axios from 'axios'; 

import {IOrganisation} from "../../app/models/organisation"

const OrganisationDetail = () => {
 
  const [selectedorganisation, setselectedOrganistion ] = useState<IOrganisation | null>(null);
  
useEffect(() =>{
  axios
  .get<IOrganisation>('http://localhost:5000/api/organisation')
    .then((response)=> {
        setselectedOrganistion(response.data)
    });
},[]);

    return (
      <div className="App">  
        <h2>{selectedorganisation?.companyName}</h2>
    <p> {selectedorganisation?.customerDescription}</p>
    <img src ={selectedorganisation?.imageUrl}></img>
          
      </div>
    )
  }

  export default OrganisationDetail