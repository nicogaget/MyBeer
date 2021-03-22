import { createSelector } from "reselect";

export const beersSelector = (state) => state.beers;

export const beersIsLoadingSelector = createSelector(
  [beersSelector],
  beers => beers.isLoading
);

export const beersListSelector = createSelector(
  [beersSelector],
  beers => beers.data
);

export const beersSelectedBeerIndexSelector = createSelector(
  [beersSelector],
  beers => beers.selectedBeer
);
export const beersSelectedBeerSelector = createSelector(
  [beersSelector, beersSelectedBeerIndexSelector],
  (beersData, index) => beersData[index]
);
