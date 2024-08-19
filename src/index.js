import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

let rerenderEntireTree = (state) => {
  root.render(
  <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

rerenderEntireTree(store.getState());