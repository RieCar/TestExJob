import React from 'react'
import OrganisationDetail from './Organisation'

export const Card = () => {
    return (
        <div className="maincard">
        <h1>Dashboard</h1>
        <p>Secret Page</p>
        {/* <button>Log Out</button> */}
          <OrganisationDetail/>  
        </div>
    )
}