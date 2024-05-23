import reportWebVitals from './reportWebVitals';
import state from './redux/State'
import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost,updateNewPostText,updateNewPostImg,updateNewMessageText,subscribed,addLike} from './redux/State'
import {addMessage} from './redux/State'

let rerenderEntireTree = (state) =>{
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewPostImg={updateNewPostImg} updateNewMessageText={updateNewMessageText} addLike={addLike}/>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

rerenderEntireTree(state);
subscribed(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
