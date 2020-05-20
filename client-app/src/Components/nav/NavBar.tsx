import React, { useEffect, useState, Fragment } from "react";

import { NavLink, useHistory } from "react-router-dom";
import Login from "../Login";
// import { IUser } from "../../app/models/user";
// import agent from "../../app/api/agent";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Features/useractions";
import { IStore } from "../../app/models/store";

export const NavBar: React.FC = () => {
  //const [isLoggedIn, setIsLoggedIn] = useState<Boolean | null>(false);
  // const [user, setUser ] = useState<IUser | null>(null);
  const currentUser = useSelector(
    (store: IStore) => store.currentUser);

  console.log(currentUser?.displayName);

  //const [user, setUser] = useState<IUser | null>(null);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleOnClick = (e: any) => {
    e.preventDefault();
    dispatch(logoutUser());
    history.push("/");
  };

  return (
    <div className="navbar">
      <Fragment>
        <nav>
          <ul>
            <li>
              <NavLink
                className="tags"
                activeStyle={{ color: "red" }}
                exact
                to="/"
              >
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="tags"
                activeStyle={{ color: "red" }}
                exact
                to="/Card"
              >
                View Dashboard Protected
              </NavLink>
            </li>
            <li>
              {currentUser && currentUser.displayName ? (
                <Fragment>
                  <p>
                    <i className="far fa-user"></i> Welcome {currentUser.displayName}{" "}
                  </p>
                  <button onClick={handleOnClick}>Log Out </button>{" "}
                </Fragment>
              ) : (
                <Fragment>
                  <NavLink to="/Login" component={Login}>
                    Log In
                  </NavLink>
                </Fragment>
              )}
            </li>
          </ul>
        </nav>
      </Fragment>
    </div>
  );
};
