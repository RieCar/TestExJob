import React,{useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import store from "../Features/store";
import {Header} from "../Components/Header";
import {IOrganisation} from "../app/models/organisation"
import agent from './api/agent';

const App = () => {
 
  const [organisation, setOrganistion ] = useState<IOrganisation[]>([]);
  const currentUserorg = store.currentUser?.organisation; 
useEffect(() =>{
 agent.Organisations.details(currentUserorg)
    .then((response)=> {
      setOrganistion(response)
    });
},[]);

    return (
      <Provider store ={store}> 
      <div className="App">  
      <Header {...store}/>
        <ul>
          {organisation.map((organisation)=> (
            <li key ={organisation.customerId} > {organisation.companyName}
            <p> {organisation.customerDescription}</p>
            <img src={'http:' + organisation.imageUrl} alt="" ></img></li>
        
          ))}       
        </ul>   
      </div>
      </Provider>
    )
  }


export default App;
