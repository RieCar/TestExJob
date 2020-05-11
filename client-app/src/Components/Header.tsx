import React from 'react'

import Login from "../Components/Login";
import Register from "../Components/Register";

export const Header = () => {



return (
<header>
   <h1>Customer Portal </h1>
   <Login/>
   <Register/>
<nav>
    {/* <ul>
        <li> Summery </li>
        <li> Organisation </li>
        <li> Projects </li>
        <li> Orders </li>
    </ul> */}
</nav>
</header>


)

}