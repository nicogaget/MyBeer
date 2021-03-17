import React, { Component } from "react";
import BeerElement from "./BeerElement";

export default class BeerList extends Component {
  render() {
    return (
      <div className="w-75 d-flex flex-wrap justify-content-center">
        <BeerElement
          beer={this.props.beers[0]}
          updateSelectedBeer={this.props.updateSelectedBeer}
        />
        <BeerElement
          beer={this.props.beers[1]}
          updateSelectedBeer={this.props.updateSelectedBeer}
        />
        <BeerElement
          beer={this.props.beers[2]}
          updateSelectedBeer={this.props.updateSelectedBeer}
        />
        <BeerElement
          beer={this.props.beers[3]}
          updateSelectedBeer={this.props.updateSelectedBeer}
        />
        <BeerElement
          beer={this.props.beers[4]}
          updateSelectedBeer={this.props.updateSelectedBeer}
        />
        <BeerElement
          beer={this.props.beers[5]}
          updateSelectedBeer={this.props.updateSelectedBeer}
        />
      </div>
    );
  }
}
