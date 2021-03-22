import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleWare from "redux-thunk";

const appReducer = combineReducers(reducers);

const middlewares = [thunkMiddleWare];

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
