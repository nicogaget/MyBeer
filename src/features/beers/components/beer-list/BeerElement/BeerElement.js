import React, { Component } from "react";
import Style from "./BeerElement.module.scss";
export default class BeerElement extends Component {
  onClick = () => {
    this.props.updateSelectedBeer(this.props.beer.name);
  };

  render() {
    return (
      <div
        onClick={this.onClick}
        className={"beer-element p-2 " + Style.container}
      >
        <li className="card text-center carouse-item border-secondary">
          <div className="card-body p-2 d-flex flex-column">
            <h3 className="card-header mb-auto ">{this.props.beer.name}</h3>
            <img
              className="img-fluid p-2 mt-auto"
              alt="Une bière"
              src={this.props.beer.img}
            />
          </div>
          <div className="card-footer d-flex justify-content-center m-0">
            <div className="">{this.props.beer.details}</div>
            <div className="d-flex -flex-row justify-content-end">
              {this.props.isFavori ? (
                <button
                  onClick={() => {
                    this.props.removeFavori(this.props.beer.name);
                  }}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.addFavori(this.props.beer);
                  }}
                  className="btn btn-primary"
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </li>
        {/* <div className="border d-flex">
          <img
            
            height="100"
            alt="bière"
            src="https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzc3MzYtNDI4ODguanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4MH0sInBuZyI6eyJxdWFsaXR5Ijo4MH0sInJlc2l6ZSI6eyJ3aWR0aCI6Nzg2LCJoZWlnaHQiOjU0MCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MCwiZyI6MCwiYiI6MCwiYWxwaGEiOjB9fX19"
            className="img"
          />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>Iron Maiden Trooper - 33cl</h5>
            <hr className="w-100" />
            <p>
              Robe blonde dorée plutôt classique surmontée toutefois d'une belle
              mousse blanche.
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}
