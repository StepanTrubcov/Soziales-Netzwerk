import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost,updateNewPostText,updateNewPostImg,updateNewMessageText} from './redux/State'
import {addMessage} from './redux/State'

let rerenderEntireTree = (state) =>{
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewPostImg={updateNewPostImg} updateNewMessageText={updateNewMessageText}/>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

export default rerenderEntireTree;