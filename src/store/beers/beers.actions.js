import apiBeerRequest from "../../conf/apiBeer";

export const REQUEST_BEERS = "request beers";
export const FETCH_BEERS = "fetch beers";
export const FETCH_BEERS_SUCCESS = "fetch fbeers beers";
export const FETCH_BEERS_ERROR = "fetch beers error";
export const SET_SELECTED_BEERS = "set selected beers";

export const requestBeers = () => ({
  type: REQUEST_BEERS,
});

export const fetchBeersSuccess = (fbeers) => ({
  type: FETCH_BEERS_SUCCESS,
  fbeers,
});

export const fetchBeersError = (error) => ({
  type: FETCH_BEERS_ERROR,
  error,
});

export const fetchBeers = (filter) => (dispatch) => {
  dispatch(requestBeers());
  return apiBeerRequest.searchBeers(filter).then(
    beers => dispatch(fetchBeersSuccess(beers)),
    error => dispatch(fetchBeersError(error))
  );
};
export const setSelectedBeer = (index) => ({
  type: SET_SELECTED_BEERS,
  index,
});