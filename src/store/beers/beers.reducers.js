import * as actions from "./beers.actions";
// eslint-disable-next-line
export default (
  state = {
    data: [],
    isLoading: false,
    error: null,
    selectedBeer: 0,
  },
  action
) => {
  switch (action.type) {
    case actions.REQUEST_BEERS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actions.FETCH_BEERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [...action.beers],
      };
    }
    case actions.FETCH_BEERS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case actions.SET_SELECTED_BEERS: {
      return {
        ...state,
        selectedBeer: action.index,
      };
    }
    default: {
      return state;
    }
  }
};
