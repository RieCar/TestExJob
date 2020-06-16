import React, { Fragment } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Features/reduxuser/useractions";
import { IStore } from "../../app/models/store";
import "../../app/layout/style/navbar.scss";

export const NavBar: React.FC = () => {

  const currentUser = useSelector((store: IStore) => store.currentUser);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleOnClick = (e: any) => {
    e.preventDefault();
    dispatch(logoutUser());
    history.push("/");
  };

  return (
    <div className="container">
      <Fragment>
        <nav className="navbar-main">
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink
                className="tags"
                activeStyle={{ color: "#d97575" }}
                exact
                to="/"
              >
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className="tags"
                activeStyle={{ color: "#d97575" }}
                exact
                to="/Card"
              >
                Customer page
              </NavLink>
            </li>
            <li className="navbar-item">
              {currentUser && currentUser.data?.displayName ? (
                <Fragment>
                  <p>
                    <i className="far fa-user"></i> Welcome{" "}
                    {currentUser?.data?.displayName}{" "}
                  </p>
                  <button className="logout-button" onClick={handleOnClick}>
                    Log Out{" "}
                  </button>{" "}
                </Fragment>
              ) : (
                <Fragment>
                  <NavLink
                    className="tags"
                    activeStyle={{ color: "#d97575" }}
                    exact
                    to="/Login"
                  >
                    Login
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

// component={Login}
