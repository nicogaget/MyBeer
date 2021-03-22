import React, { Component } from "react";
import BeerElement from "./FavoriElement/FavoriElement";

export default class BeerList extends Component {
  render() {
    return (
      <div>
        <div className="w-100 d-flex flex-wrap justify-content-center">
          {this.props.favoris.map((f, index) => (
            <BeerElement
              key={f.name + index}
              favori={f}
              removeFavori={()=> this.props.removeFavori(f.name)}
            />
          ))}
        </div>
      </div>
    );
  }
}
