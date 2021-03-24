import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import AuthApi from "../../conf/AuthApi";
import AuthContext from "../../context/AuthContext";

const NavBar = ({ history }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = () => {
    AuthApi.logout();
    setIsAuthenticated(false);
    toast.info("Vous êtes désormais déconnecté 😉");
    history.push("/login");
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand" href="/">
        TITLE
      </a>
      {/* <button className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"> */}
      <div className="navbar navbar-expand mr-auto">
        <ul className="navbar-nav ">
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
      </div>
      <div className="navbar navbar-expand">
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
              </li>
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
