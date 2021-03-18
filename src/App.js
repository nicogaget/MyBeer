import "./App.css";
import { BeerList, BeerDetails, SearchBar } from "./features/beers";
import { Navbar, Loading } from "./components";
import { Component } from "react";
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
        <SearchBar
          updateBeers={this.updateBeers}
          handleChange={this.handleChange}
          search={this.state.search}
        />
        {this.state.loaded ? (
          <div className=" d-flex flex-row flex-fill pt-4 p-2">
            {this.state.beers.length !== 0 ? (
              <>
                <BeerList
                  beers={this.state.beers}
                  updateSelectedBeer={this.updateSelectedBeer}
                  countries={this.state.countries}
                />
                <BeerDetails beer={this.state.beers[this.state.selectedBeer]} />
              </>
            ) : (
              "no beers"
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
