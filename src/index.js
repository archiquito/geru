import "./styles/css/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import App from "./App";

import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

import Routes from "./main/routes";

const content = global.document.getElementById("root");

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AppContainer>,
  content
);
