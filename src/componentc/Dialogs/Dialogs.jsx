import React from "react";
import c from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Message/Message'
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {

let newDialogsData = props.dialogsData.map((dialog) => (<DialogsItem ava={dialog.ava} name={dialog.name} id={dialog.id} />));

let newMessagesData = props.messagesData.map((message)=>(<Messages message={message.message} id={message.id} name={message.name} img={message.img} to={message.to} />))

let newMessage = React.createRef();

let addMessage =()=>{
  let text = newMessage.current.value;
  props.addMessageActionCreator(text)
}


let newText = () =>{
  let text = newMessage.current.value;
  props.newTextActionCreator0(text)
}
  
return (
    <div className={c.dialogs}>
      <p>DIALOGS</p>
      <div className={c.titel}></div>
      <div className={c.dialogsItems}>
        {newDialogsData}
      <hr></hr>
      </div>
      <div>
        {newMessagesData}
        <div className={c.newMessage}>
          <textarea onChange={newText} className={c.linie} ref={newMessage} value={props.newMessageText}></textarea>
      <button className={c.button} onClick={addMessage}>Send</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
