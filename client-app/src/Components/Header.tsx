import React from 'react'

import Login from "../Components/Login";
import Register from "../Components/Register";
import { NavBar } from './nav/NavBar';

export const Header = (...store:any) => {



return (
<header>
   <h1>Customer Portal </h1>
   <NavBar/>
   {/* <Login/>
   <Register/> */}

</header>


)

}