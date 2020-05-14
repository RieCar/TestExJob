import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from '../home/HomePage'
import Login from '../Login'
import Register from '../Register'
import OrganisationDetail from '../CustomerCard/Organisation'

export const NavBar = () => {

    return (
        <div>
            <Router> 
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/Organisation'> OrganisationDetail</Link></li>
                    <li> <Link to='/Login'>LogIN </Link></li>
                    <li><Link to='/Register'>Register</Link> </li>
                </ul>

            <Switch>
            <Route path='/Organisation'>
            <OrganisationDetail />
          </Route>
          <Route path="/Login">
            < Login/>
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
            </nav>
            </Router>
        </div>
    )
}
