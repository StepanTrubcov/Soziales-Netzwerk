import React from "react";
import c from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Message/Message'
import { Navigate } from "react-router-dom";
import DialogsForm from "./DialogsForm/DialogsForm";

const Dialogs = (props) => {


let newDialogsData = props.dialogsData.items.map((d) => (<DialogsItem follow={d.followed} id={d.id} name={d.name} photos={d.photos.small} />));

let newMessagesData = props.messagesData.map((message)=>(<Messages message={message.message} id={message.id} name={message.name} img={message.img} to={message.to} />))

let addMessage =(values)=>{
  props.addMessageActionCreator(values.message)
  values.message=''
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
          <DialogsForm onSubmit={addMessage}  />
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
