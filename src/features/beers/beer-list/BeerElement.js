import React, { Component } from "react";

export default class BeerElement extends Component {
  render() {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img
            alt="bière"
            src="https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzc3MzYtNDI4ODguanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4MH0sInBuZyI6eyJxdWFsaXR5Ijo4MH0sInJlc2l6ZSI6eyJ3aWR0aCI6Nzg2LCJoZWlnaHQiOjU0MCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MCwiZyI6MCwiYiI6MCwiYWxwaGEiOjB9fX19"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Iron Maiden Trooper - 33cl</h5>
            <p className="card-text">
              Robe blonde dorée plutôt classique surmontée toutefois d'une belle
              mousse blanche.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
