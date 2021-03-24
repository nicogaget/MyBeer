import { lazy, Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, PrivateRoute } from "./components";
import AuthContext from "./context/AuthContext";
import AuthApi from "./services/AuthApi";
import "./Style/App.scss";
import { fetchFavoris } from "./store/actions";
import jwt from 'jwt-decode'

const LazyBeers = lazy(() => import("./features/beers"));
const LazyFavoris = lazy(() => import("./features/favoris"));
const LazyRegister = lazy(() => import("./features/RegisterPage"));
const LazyLogin = lazy(() => import("./features/login/LoginPage"));

AuthApi.setup();

const App = ({ fetchFavoris }) => {
  useEffect(() => {
    isAuthenticated && fetchFavoris();
  });
  

  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthApi.isAuthenticated()
  );
  const NavbarWithRouter = withRouter(Navbar);
  // console.log(jwt(localStorage.getItem("authToken")).pseudo)
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <div className="App d-flex flex-column">
        <NavbarWithRouter />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Switch>
            <Route path="/login" component={LazyLogin} />
            <Route path="/register" component={LazyRegister} />
            <Route path="/beers" component={LazyBeers} />
            <PrivateRoute path="/favoris" component={LazyFavoris} />
            <Redirect to="/beers" />
          </Switch>
        </Suspense>
      </div>
      <ToastContainer
        position={toast.POSITION.BOTTOM_RIGHT}
        autoClose={3000}
        delay={1000}
        pauseOnFocusLoss={false}
      />
    </AuthContext.Provider>
  );
};

export default withRouter(
  connect(null, {
    fetchFavoris,
  })(App)
);
