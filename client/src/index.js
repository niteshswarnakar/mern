import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import App from "./App";
import "./index.css";
const store = configureStore({ reducer: reducers });

ReactDom.render(
  <Provider store={store}>
    <App className="body" />
  </Provider>,
  document.getElementById("root")
);
