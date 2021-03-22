import { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import favoris from "./features/favoris";
import { fetchFavoris } from "./store/actions";

const LazyBeers = lazy(() => import("./features/beers"));
const LazyFavoris = lazy(() => import("./features/favoris"));

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
