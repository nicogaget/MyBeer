import React, { Component } from "react";
import BeerElement from "./BeerElement/BeerElement";

export default class BeerList extends Component {
  render() {
    return (
      <>
        <div className="w-75 d-flex flex-wrap justify-content-center">
          {this.props.beers.map((b, index) => (
            <BeerElement
              key={b.name + index}
              beer={b}
              updateSelectedBeer={() => {
                this.props.updateSelectedBeer(index);
              }}
              isFavori={this.props.favoris.includes(b.name)}
              addFavori={this.props.addFavori}
              removeFavori={this.props.removeFavori}
            />
          ))}
        </div>
      </>
    );
  }
}
