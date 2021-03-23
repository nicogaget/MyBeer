import React from "react";
import { NavLink } from "react-router-dom";
import AuthApi from "../../conf/AuthApi";

const NavBar = ({ onLogout, isAuthenticated }) => {
  const handleLogout = () => {
    AuthApi.logout();
    onLogout(false);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        TITLE
      </a>
      {/* <button className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"> */}
      <div className="navbar navbar-expand">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <NavLink
              to="/beers"
              href="/"
              className="nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink
              to="/favoris"
              href="/"
              className="nav-link"
              activeClassName="active"
            >
              Favoris
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {(!isAuthenticated && (
            <>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className="btn text-info font-weight-bold fs-1 "
                >
                  Inscription
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="btn btn-info font-weight-bold fs-1"
                >
                  Connexion !
                </NavLink>
              </li>{" "}
            </>
          )) || (
            <li className="nav-item">
              <NavLink
                to="/login"
                onClick={handleLogout}
                className="btn btn-danger"
              >
                Déconnexion
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
export default NavBar;
