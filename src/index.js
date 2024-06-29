import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

reportWebVitals();
