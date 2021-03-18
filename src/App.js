import "./App.css";
import BeerDetails from "./features/beers/beer-details/BeerDetails";
import BeerList from "./features/beers/beer-list/BeerList";
import { Navbar, Loading } from "./components";
import { Component } from "react";
import dataBeers from './data'
import apiBeer from './conf/apiBeer'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
      selectedBeer: 0,
      loaded: false,
    };
    setTimeout(()=>{
      this.setState({
        beers: dataBeers,
        loaded:true
      })
    },1000)
  }

  componentDidMount(){
    apiBeer.get ('http://127.0.0.1:8000/api/beers')
    .then(response=> console.log(response.data["hydra:member"]))
    .catch(err => console.log(err))
  }

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
