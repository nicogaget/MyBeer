import React from "react";
import { connect } from "react-redux";
import Loading from "../../components/utils/Loading";
import {
  fetchBeers,
  setSelectedBeer,
  tryAddFavori,
  tryRemoveFavori
} from "../../store/actions";
import {
  beersIsLoadingSelector,
  beersListSelector,
  beersSelectedBeerSelector, favorisListNameSelector
} from "../../store/selectors";
import { BeerDetails, BeerList, SearchBar } from "./components";

// eslint-disable-next-line
const Beers = (props) => {
  return (
    <>
      <SearchBar fetchBeers={props.fetchBeers} />
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className=" d-flex flex-row flex-fill pt-4 p-2">
          <BeerList
            beers={props.beers}
            updateSelectedBeer={props.setSelectedBeer}
            favoris={props.favorisListName}
            removeFavori={props.tryRemoveFavori}
            addFavori={props.tryAddFavori}
          />
          <BeerDetails beer={props.selectedBeer} />
        </div>
      )}
    </>
  );
};
export default connect(
  (state) => ({
    isLoding: beersIsLoadingSelector(state),
    beers: beersListSelector(state),
    favorisListName: favorisListNameSelector(state),
    selectedBeer: beersSelectedBeerSelector(state),
  }),
  {
    fetchBeers,
    setSelectedBeer,
    tryRemoveFavori,
    tryAddFavori,
  }
)(Beers);
