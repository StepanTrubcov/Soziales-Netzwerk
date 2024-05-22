import React from "react";
import c from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Message/Message'

const Dialogs = (props) => {

let newDialogsData = props.dialogsData.map((dialog) => (<DialogsItem ava={dialog.ava} name={dialog.name} id={dialog.id} />));

let newMessagesData = props.messagesData.map((message)=>(<Messages message={message.message} id={message.id} name={message.name} img={message.img} to={message.to} />))

let newMessage = React.createRef();

let addMessage =()=>{
  let text = newMessage.current.value;
  props.addMessage(text);
}

let newText = () =>{
  let text = newMessage.current.value;
  props.updateNewMessageText(text);
}
  
return (
    <div className={c.dialogs}>
      <p>DIALOGS</p>
      <div className={c.titel}></div>
      <div className={c.dialogsItems}>
        {newDialogsData}
      </div>
      <div>
        {newMessagesData}
        <div className={c.newMessage}>
          <textarea onChange={newText} className={c.linie} ref={newMessage}></textarea>
      <button className={c.button} onClick={addMessage}>Schicken</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
