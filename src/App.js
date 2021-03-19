import { Component } from "react";
import "./App.css";
import { Navbar } from "./components";
import Beers from './features/beers'
import apiBeer, { apiBeerMap } from "./conf/apiBeer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
      selectedBeer: 0,
      loaded: false,
      search: "",
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

  render() {
    return (
      <div className="App d-flex flex-column">
        <Navbar />
        <Beers 
          loaded={ this.state.loaded}
          updateBeers ={this.updateBeers}
          updateSelectedBeer={this.updateSelectedBeer}
          beers={this.state.beers}
          handleChange={this.handleChange}
          search={this.search}
          selectedBeer={this.state.selectedBeer}
        />
        
      </div>
    );
  }
}

export default App;
