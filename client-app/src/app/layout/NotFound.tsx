import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./style/global.scss";


const NotFound = ()=> {
    return (
        <div className="container">
            <h2> Not found</h2>
            <p> Ooops we have looked everywhere but we still haven't found what you looking for..</p>
            

            <NavLink to={'/Register'}> Ny användare? Registrera dig! </NavLink>
        </div>
    )
}
export default NotFound;
