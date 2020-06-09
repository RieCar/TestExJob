import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { IStore } from '../../app/models/store';

import '../../app/layout/style/sidebar.scss';

const SideBar = () => {

    const currentProjects = useSelector((store: IStore) => store.currentOrg?.projects);

    const currentOrders = useSelector((store: IStore) => store.currentOrg?.orders);
      
      function ListItems(props: any) {
        var currentList = props.items;
      currentList?.map((item:any)=> (
         console.log(item.Description)
       ))
        const list = (
          <div>
            <ul>
              {currentList?.map((item: any) => (
                <li key={item.id}><a href="#"> {item.titel}</a>
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



