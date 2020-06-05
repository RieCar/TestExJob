import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const NotFound = ()=> {
    return (
        <div>
            <h2> Not found</h2>
            <p> Ooops we have looked everywhere but we still haven't found what you looking for..</p>
            

            <NavLink to={'/Register'}> Ny användare? Registrera dig! </NavLink>
        </div>
    )
}
export default NotFound;
