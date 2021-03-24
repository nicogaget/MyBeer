import apiBeerRequest from "../../services/apiBeer";

export const REQUEST_BEERS = "request beers";
export const FETCH_BEERS = "fetch beers";
export const FETCH_BEERS_SUCCESS = "fetch beers success";
export const FETCH_BEERS_ERROR = "fetch beers error";
export const SET_SELECTED_BEER = "set selected beer";

export const requestBeers = () => ({
  type: REQUEST_BEERS,
});

export const fetchBeersSuccess = (beers) => ({
  type: FETCH_BEERS_SUCCESS,
  beers,
});

export const fetchBeersError = (error) => ({
  type: FETCH_BEERS_ERROR,
  error,
});

export const fetchBeers = (filter) => async (dispatch) => {
  dispatch(requestBeers());
  return apiBeerRequest.searchBeers(filter).then(
    (beers) => (dispatch(fetchBeersSuccess(beers))),
    (error) => dispatch(fetchBeersError(error))
  );
};
export const setSelectedBeer = (index) => ({
  type: SET_SELECTED_BEER,
  index,
});
