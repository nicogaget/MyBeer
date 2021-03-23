import { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Navbar } from "./components";
import { fetchFavoris } from "./store/actions";
import "./Style/App.scss";
import LoginPage from "./features/login/LoginPage";
import AuthApi from "./conf/AuthApi";

const LazyBeers = lazy(() => import("./features/beers"));
const LazyFavoris = lazy(() => import("./features/favoris"));

AuthApi.setup();
class App extends Component {
  componentDidMount() {
    this.props.fetchFavoris();
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Navbar />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/beers" component={LazyBeers} />
            <Route path="/favoris" component={LazyFavoris} />
            <Redirect to="/beers" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(
  connect(null, {
    fetchFavoris,
  })(App)
);
