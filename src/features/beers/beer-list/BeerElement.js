import React, { Component } from "react";

export default class BeerElement extends Component {
  render() {
    return (
      <div className="w-50 p-2">
        <li className="card text-center carouse-item border-secondary">
        <div
          className="card-body p-2 d-flex flex-column"
          
        >
          <h2 className="card-header mb-auto ">Iron Maiden Trooper - 33cl</h2>
          <img
            className="img-fluid p-2 mt-auto"
            alt="bière"
            src="https://d33za54wpumlhy.cloudfront.net/eyJidWNrZXQiOiJzYXZldXJiaWVyZSIsImtleSI6ImltZy9wLzc3MzYtNDI4ODguanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4MH0sInBuZyI6eyJxdWFsaXR5Ijo4MH0sInJlc2l6ZSI6eyJ3aWR0aCI6Nzg2LCJoZWlnaHQiOjU0MCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MCwiZyI6MCwiYiI6MCwiYWxwaGEiOjB9fX19"
            
          />
        </div>
        <div className="card-footer row row-cols-2 m-0">
          <div className="col-md-6">
            
          </div>
          <div className="col-md-6">Comment</div>
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
