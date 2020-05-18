import React, { useEffect, useState, Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import Login from "../Login";
import { IUser } from "../../app/models/user";
import agent from "../../app/api/agent";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Features/actions";

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

  const handleOnClick = (e: any) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    dispatch(logoutUser());
  };

  return (
    <div>
      {user ? (
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
      )}

      <p>
        <NavLink to="/Card">View Dashboard</NavLink>
      </p>

      <i className="far fa-user"></i>
      <p> {user?.displayname}</p>
      <p> {user?.username}</p>
    </div>
  );
};
