import reportWebVitals from './reportWebVitals';
import store from './redux/State'
import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) =>{
  root.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} updateNewPostImg={store.updateNewPostImg.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)} addLike={store.addLike.bind(store)}/>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

rerenderEntireTree(store.getState());
store.subscribed(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
