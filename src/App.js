import { lazy, Suspense, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Navbar } from "./components";
import AuthApi from "./conf/AuthApi";
import LoginPage from "./features/login/LoginPage";
import { fetchFavoris } from "./store/actions";
import "./Style/App.scss";

const LazyBeers = lazy(() => import("./features/beers"));
const LazyFavoris = lazy(() => import("./features/favoris"));

AuthApi.setup();
const App = () => {
  // componentDidMount() {
  //   this.props.fetchFavoris();
  // }
  const [isAuthenticated, setIsAuthenticated] = useState(AuthApi.isAuthenticated());
console.log(isAuthenticated)
  // render() {
  return (
    <div className="App d-flex flex-column">
      <Navbar isAuthenticated={isAuthenticated} onLogout={setIsAuthenticated}/>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <LoginPage
                onLogin={setIsAuthenticated}
              />
            )}
          />
          <Route path="/beers" component={LazyBeers} />
          <Route path="/favoris" component={LazyFavoris} />
          <Redirect to="/beers" />
        </Switch>
      </Suspense>
    </div>
  );
};
// }

export default withRouter(
  connect(null, {
    fetchFavoris,
  })(App)
);
