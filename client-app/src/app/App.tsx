import React,{useState, useEffect} from 'react';
import { Provider, useSelector } from 'react-redux';

// Components
import {Header} from "../Components/Header";

// Models
import {IOrganisation} from "../app/models/organisation"
import { IStore } from '../app/models/store'

// API
import agent from './api/agent';

// Redux
import { initializeStore } from '../Features/store'

const store = initializeStore()

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
    <Provider store ={store}> 
      <div className="App">  
        <Header />
        {organisation && (
          <ul>          
            <li key ={organisation.customerId} > {organisation.companyName}
            <p> {organisation.customerDescription}</p>
            <img src={'http:' + organisation.imageUrl} alt="" ></img></li>                
          </ul>
        )}
      </div>
    </Provider>
  )
}
export default App;
