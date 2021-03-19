import { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import apiBeer, { apiBeerMap } from "./conf/apiBeer";
import Beers from "./features/beers";
import Favoris from "./features/favoris";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
      selectedBeer: 0,
      loaded: false,
      search: "",
      favoris: [],
    };
  }

  componentDidMount() {
    apiBeer
      .get("/beers")
      .then((response) => response.data["hydra:member"])
      .then((beersApi) => {
        const beers = beersApi.map(apiBeerMap);

        this.updateBeers(beers);
      })
      .catch((err) => console.log(err));
  }

  updateBeers = (beers) => {
    this.setState({
      beers,
      loaded: true,
    });
  };

  updateSelectedBeer = (index) => {
    this.setState({
      selectedBeer: index,
    });
  };
  handleChange = ({ currentTarget }) => {
    console.log(currentTarget.value);
    this.setState({ search: currentTarget.value });

    let filter = this.state.beers.filter(
      (b) =>
        b.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        b.style.toLowerCase().includes(this.state.search.toLowerCase())
    );
    this.setState({
      beers: filter,
    });
  };

  addFavori = (name) => {
    const beer = { ...this.state.beers.find((m) => m.name === name) };
    this.setState((state) => ({
      favoris: [...this.state.favoris, beer],
    }));
  };

  removeFavori = (name) => {
    const index = this.state.favoris.findIndex((f) => f.name === name);
    this.setState((state) => ({
      favoris: state.favoris.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Navbar />
          <Switch>
            <Route
              path="/beers"
              render={(props) => {
                return (
                  <Beers
                    {...props}
                    loaded={this.state.loaded}
                    updateBeers={this.updateBeers}
                    updateSelectedBeer={this.updateSelectedBeer}
                    beers={this.state.beers}
                    handleChange={this.handleChange}
                    search={this.search}
                    selectedBeer={this.state.selectedBeer}
                    addFavori={this.addFavori}
                    removeFavori={this.removeFavori}
                    favoris={this.state.favoris.map((f) => f.name)}
                  />
                );
              }}
            />
            <Route
              path="/favoris"
              render={(props) => {
                return (
                  <Favoris
                    {...props}
                    favoris={this.state.favoris}
                    removeFavori={this.removeFavori}
                  />
                );
              }}
            />
            <Redirect path="/beers" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
