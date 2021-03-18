import React, { Component } from "react";
import BeerElement from "./BeerElement/BeerElement";

export default class BeerList extends Component {
  render() {
    return (
      <div>
        <div className="w-75 d-flex flex-wrap justify-content-center">
          {this.props.beers.length > 0
            ? this.props.beers.map((m, index) => (
                <BeerElement
                  key={m.name + index}
                  beer={m}
                  updateSelectedBeer={() => {
                    this.props.updateSelectedBeer(index);
                  }}
                />
              ))
            : "no beer"}
        </div>
      </div>
    );
  }
}
