import React from "react";
import {
  addMessageActionCreator,
  newTextActionCreator0,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsConteiner = (props) => {
  let state = props.store.getState();

  let addMessage = (text) => {
    props.store.dispatch(addMessageActionCreator(text));
  };

  let newText = (text) => {
    props.store.dispatch(newTextActionCreator0(text));
  };

  return (
    <Dialogs
      newText={newText}
      addMessage={addMessage}
      dispatch={props.store.dispatch}
      dialogsData={state.messagesPage.dialogsData}
      messagesData={state.messagesPage.messagesData}
      newMessageText={state.messagesPage.newMessageText}
    />
  );
};

export default DialogsConteiner;
