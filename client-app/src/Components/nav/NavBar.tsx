import React, { useEffect, useState, Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import Login from "../Login";
import { IUser } from "../../app/models/user";
import agent from "../../app/api/agent";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Features/useractions";

export const NavBar = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const dispatch = useDispatch();

  console.log(user);
  useEffect(() => {
    agent.Users.current().then((response) => {
      setUser(response);
      console.log(response);
    });
  }, []);

  const history = useHistory(); 

  const handleOnClick = (e: any) => {
    e.preventDefault();
    dispatch(logoutUser());
    history.push('/');
  };

  return (
    <div className="navbar">
      <Fragment> 
      <nav>
        <ul>
          <li><NavLink exact to='/'> Home </NavLink></li>
          <li><NavLink exact to='/Card'>View Dashboard Protected</NavLink></li>
          <li>{user ? (
        <Fragment>
          {" "}
          <button onClick={handleOnClick}>Log Out </button>{" "}
        </Fragment>
      ) : (
        <Fragment>
          {" "}
          <NavLink to="/Login" component={Login}>
            Log In
          </NavLink>{" "}
        </Fragment>
      )}</li>
      <li>    <i className="far fa-user"></i></li>
        </ul>
      </nav>  
      {/* <p> {user?.displayname}</p>
      <p> {user?.username}</p> */}
      </Fragment>
    </div>
  );
};
