import React, { Component } from "react";

export default class FavoriElement extends Component {
  render() {
    const {favori}= this.props
    return (
      <div className="beer-element p-2 ">
        <li className="card text-center carouse-item border-secondary">
          <div className="card-body p-2 d-flex flex-column">
            <h3 className="card-header mb-auto ">{favori.name}</h3>
            <img
              className="img-fluid p-2 mt-auto"
              alt="Une bière"
              src={favori.img}
            />
          </div>
          <div className="card-footer d-flex justify-content-center m-0">
            <div className="">{favori.details}</div>
            <div className="d-flex -flex-row justify-content-end">
            <img
                  src="https://icon-library.com/images/beer-icon/beer-icon-6.jpg"
                  alt="icon"
                  className=""
                  width="49"
                  height="49"
                  onClick={() => {
                    this.props.removeFavori(this.props.favori.name);
                  }}
                />
            </div>
          </div>
        </li>
        
      </div>
    );
  }
}
