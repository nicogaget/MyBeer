import React from "react";
import { BeerList, BeerDetails, SearchBar } from "./components";
import Loading from "../../components/utils/Loading";
// eslint-disable-next-line
export default (props) => {
  return (
    <>
      <SearchBar
        updateBeers={props.updateBeers}
        handleChange={props.handleChange}
        search={props.search}
      />
      {props.loaded ? (
        <div className=" d-flex flex-row flex-fill pt-4 p-2">
          {props.beers.length !== 0 ? (
            <>
              <BeerList
                beers={props.beers}
                updateSelectedBeer={props.updateSelectedBeer}
                favoris={props.favoris}
                removeFavori={props.removeFavori}
                addFavori={props.addFavori}
              />
              <BeerDetails beer={props.beers[props.selectedBeer]} />
            </>
          ) : (
            "no beers"
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
