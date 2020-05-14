import React,{useState, useEffect} from "react"
import axios from 'axios'; 
import { useSelector } from "react-redux";

import { IOrganisation } from "../../app/models/organisation"
import { IStore } from "../../app/models/store";

const OrganisationDetail = () => {
 
  const userOrganisation = useSelector((store:IStore) => store.currentUser?.organisation)  
  const [selectedorganisation, setselectedOrganistion ] = useState<IOrganisation | null>(null);
  
  useEffect(() =>{

    const data = {
      params: {
        name: userOrganisation
      }
    }

    axios
      .get<IOrganisation>('http://localhost:5000/api/organisation/', data)
      .then((response)=> {
          setselectedOrganistion(response.data)
          console.log(response.data)
      });
    
  }, [userOrganisation]);

    return (
      <div className="App">  
        <h2>Details</h2>
        <h2>{selectedorganisation?.companyName}</h2>
        <p>{selectedorganisation?.customerDescription}</p>
        <img src ={selectedorganisation?.imageUrl} />          
      </div>
    )
  }

  export default OrganisationDetail