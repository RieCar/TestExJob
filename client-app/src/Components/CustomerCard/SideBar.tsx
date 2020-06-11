import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from '../../app/models/store';

import '../../app/layout/style/sidebar.scss';
import { getProjectDetails } from '../../Features/reduxproject/projactions';
import { getOrderDetails } from '../../Features/reduxorder/orderactions';


const SideBar = () => {

    const currentProjects = useSelector((store: IStore) => store.currentOrg?.projects);

    const currentOrders = useSelector((store: IStore) => store.currentOrg?.orders);
    const dispatch = useDispatch(); 

    const HandleOnClick = (event: any) => {
      console.log(event.target.dataset.id); 
      var searchId = event.target.dataset.id; 
      console.log("searchId", searchId);
      if(searchId){
        
        var isProject = currentProjects?.find(p=>p.id === searchId);
        if(isProject){
          dispatch(getProjectDetails(searchId));
        }
        else{
          console.log("order searchID ", searchId)
          dispatch(getOrderDetails(searchId));
        }
      }

    };
      function ListItems(props: any) {
        var currentList = props.items;
      currentList?.map((item:any)=> (
         console.log(item.Description)
       ))
        const list = (
          <div>
            <ul>
              {currentList?.map((item: any) => (
                <li key={item.id}><button className="navbutton" type="button" data-id={item.id}  onClick={HandleOnClick}> {item.titel}</button>
                </li>
              ))}
            </ul>
          </div>
        );
        return <div>{list}</div>;
      }
    return (
        <div>
              <h3>Dashboard</h3>     
            <ul className="sidebarmenu">
                <li className="sidebaritem"><h3>Projects <span>({currentProjects?.length})</span></h3>
                <ListItems items={currentProjects} /></li>
                <li className="sidebaritem"><h3>Orders <span>({currentOrders?.length})</span></h3>
                <ListItems items={currentOrders} />
                </li>
                <li className="sidebaritem"><h3> Contracts</h3></li>
            </ul>
        </div>
    )
}

export default SideBar 



