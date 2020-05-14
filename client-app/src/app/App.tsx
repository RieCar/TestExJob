import React,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

// Components
import {Header} from "../Components/Header";

// Models
import {IOrganisation} from "../app/models/organisation"
import { IStore } from '../app/models/store'

// API
import agent from './api/agent';

const App: React.FC = () => {
 
  const [organisation, setOrganistion ] = useState<IOrganisation | null>(null);
  const currentUserOrganization = useSelector((store: IStore) => store.currentUser?.organisation)
  
  useEffect(() =>{
    
    if (currentUserOrganization) {
      agent
        .Organisations
        .getById(currentUserOrganization)
        .then((response) => {
          setOrganistion(response)
        });
    }
    
  }, [currentUserOrganization]);

  return (
    <div className="App">  
      <Header />
      {organisation && (
        <ul>          
          <li>
            <h3>{organisation.companyName}</h3>
            <p>{organisation.customerDescription}</p>
            <img src={'http:' + organisation.imageUrl} alt="" ></img>
          </li>
        </ul>
      )}
    </div>
  )
}
export default App;
