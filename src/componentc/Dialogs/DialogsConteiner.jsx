import React from "react";
import {
  addMessageActionCreator,
  newTextActionCreator0,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
  };
};
let dispatchToProps = (dispatch) => {
  return {
    newText: (text) => {
      dispatch(addMessageActionCreator(text));
    },
    addMessage: (text) => {
      dispatch(newTextActionCreator0(text));
    },
  };
};

const DialogsConteiner = connect(mapStateToProps, dispatchToProps)(Dialogs);

export default DialogsConteiner;
