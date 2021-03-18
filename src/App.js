import "./App.css";
import BeerDetails from "./features/beers/beer-details/BeerDetails";
import BeerList from "./features/beers/beer-list/BeerList";
import { Navbar, Loading } from "./components";
import { Component } from "react";
import apiBeer from "./conf/apiBeer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
      selectedBeer: 0,
      loaded: false,
    };
    
  }

  componentDidMount() {
    apiBeer
      .get("/beers")
      .then((response) => response.data["hydra:member"])
      .then((beersApi) => {
        const beers = beersApi.map((b) => ({
          img: b.img,
          name: b.name,
          details: b.alcool + "° Alc | " + b.color + " | " + b.country,
          description: b.appearance,
        }));
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

  render() {
    return (
      <div className="App d-flex flex-column">
        <Navbar />
        {this.state.loaded ? (
          <div className=" d-flex flex-row flex-fill pt-4 p-2">
            <BeerList
              beers={this.state.beers}
              updateSelectedBeer={this.updateSelectedBeer}
            />
            <BeerDetails beer={this.state.beers[this.state.selectedBeer]} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
