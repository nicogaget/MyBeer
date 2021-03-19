import React from "react";
import { BeerList, BeerDetails, SearchBar } from "./components";
import Loading from "../../components/utils/Loading";
// eslint-disable-next-line
export default (props) => {
  return (
    <>
      <h1>tets</h1>
      {console.log(props)}
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
