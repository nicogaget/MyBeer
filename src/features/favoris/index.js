import React from "react";
import { Loading } from "../../components";
import { FavorisList } from "./components";

// eslint-disable-next-line
export default (props) => {
  return (
    <div className=" d-flex flex-row flex-fill pt-4 p-2">
      {props.loaded ? (
        <div className=" d-flex flex-row flex-fill pt-4 p-2">
          <FavorisList
            favoris={props.favoris}
            removeFavori={props.removeFavori}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
