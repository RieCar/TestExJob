import React,{useState, useEffect} from 'react';
import axios from 'axios'; 

import {Header} from "../Components/Header";
import {IOrganisation} from "../app/models/organisation"

const App = () => {
 
  const [organisation, setOrganistion ] = useState<IOrganisation[]>([]);
  
useEffect(() =>{
  axios
  .get<IOrganisation[]>('http://localhost:5000/api/organisation')
    .then((response)=> {
      setOrganistion(response.data)
    });
},[]);

    return (
      <div className="App">  
      <Header/>
        <ul>
          {organisation.map((organisation)=> (
            <li key ={organisation.customerId} > {organisation.companyName}
            <p> {organisation.customerDescription}</p>
            <img src={'http:' + organisation.imageUrl} alt="" ></img></li>
           
          ))}
        
        </ul>
   
      
      </div>
    )
  }



export default App;
