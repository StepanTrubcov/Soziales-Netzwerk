import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SamuraiJSApp from "./App";

let rerenderEntireTree = (state) => {
  root.render(
        <SamuraiJSApp/>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

rerenderEntireTree(store.getState());