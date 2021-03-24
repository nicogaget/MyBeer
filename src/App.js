import { lazy, Suspense, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Navbar } from "./components";
import {PrivateRoute} from "./components";
import AuthApi from "./conf/AuthApi";
import AuthContext from "./context/AuthContext";
import LoginPage from "./features/login/LoginPage";
import RegisterPage from "./features/RegisterPage";
import { fetchFavoris } from "./store/actions";
import "./Style/App.scss";
const LazyBeers = lazy(() => import("./features/beers"));
const LazyFavoris = lazy(() => import("./features/favoris"));

AuthApi.setup();



const App = () => {
  // componentDidMount() {
  //   this.props.fetchFavoris();
  // }
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthApi.isAuthenticated()
  );

  const NavbarWithRouter = withRouter(Navbar);

 

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      setIsAuthenticated
    }}>
      <div className="App d-flex flex-column">
        <NavbarWithRouter />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage}/>
            <Route path="/beers" component={LazyBeers} />
            <PrivateRoute path="/favoris" component={LazyFavoris} />
            <Redirect to="/beers" />
          </Switch>
        </Suspense>
      </div>
    </AuthContext.Provider>
  );
};

export default withRouter(
  connect(null, {
    fetchFavoris,
  })(App)
);
