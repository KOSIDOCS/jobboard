import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
// import HomePage from './components/HomePage';
import AppRouter from "./router/AppRouter";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";

ReactDOM.render(
  <Provider store={store}>
    {/* <HomePage /> */}
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
