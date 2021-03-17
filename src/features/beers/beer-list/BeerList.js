import React, { Component } from "react";
import BeerElement from "./BeerElement";

export default class BeerList extends Component {
  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap align-content-start">
        <BeerElement/>
        <BeerElement/>
        <BeerElement/>
        <BeerElement/>
        <BeerElement/>
        <BeerElement/>
        
        
      </div>
    );
  }
}
