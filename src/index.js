import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Store } from "./store";
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById("root")
);
