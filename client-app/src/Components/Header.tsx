import React from 'react'

import Login from "../Components/Login";
import Register from "../Components/Register";
import { NavBar } from './nav/NavBar';

export const Header: React.FC = () => {

   return (
      <header>
         <h1>Customer Portal </h1>
         <NavBar/>         
      </header>
   )

}