import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleWare from "redux-thunk";
import logger from "redux-logger";

const appReducer = combineReducers(reducers);

const middlewares = [thunkMiddleWare];
if (process.env.NODE_ENV === 'development'){
  middlewares.push(logger)
}
export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
