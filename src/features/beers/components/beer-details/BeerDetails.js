import React, { Component } from "react";

export default class BeerDetails extends Component {
  render() {
    return (
      <div className="w-25 border p-4 d-flex flex-column">
        {this.props.beer ? (
          <>
            <h5>{this.props.beer.name}</h5>
            <hr className="w-100" />
            <div className="">
              <img
                className=" mx-auto img-thumbnail beer-details-img"
                alt="beer"
                src={this.props.beer.img}
              />
            </div>
            <hr className="w-100" />
            <span className="text-secondary">{this.props.beer.details}</span>
            <span>{this.props.beer.description}</span>
          </>
        ) : null}
      </div>
    );
  }
}
