import React, { Component } from "react";
import Style from "./BeerElement.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
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
        <li className="card text-center border-secondary element-card">
          <div className="card-body p-2 d-flex flex-column">
            <h3 className="card-header ">{this.props.beer.name}</h3>
            <img
              className="img-fluid p-2 mt-auto"
              alt="Une bière"
              src={this.props.beer.img}
            />
          </div>
          <div className="card-footer row d-flex justify-content-center m-0">
            <div className="col-9">{this.props.beer.details}</div>
            <div className="d-flex col-3 flex-row justify-content-end">
              {this.props.isFavori ? (
                <img
                  src="https://icon-library.com/images/beer-icon/beer-icon-6.jpg"
                  alt="icon"
                  className=""
                  width="49"
                  height="49"
                  onClick={() => {
                    this.props.removeFavori(this.props.beer.name);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  className={"ml-4 " + Style.icon}
                  size="3x"
                  icon={faBeer}
                  onClick={() => {
                    this.props.addFavori(this.props.beer);
                  }}
                />
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
