import React from "react";
import {
  addMessageActionCreator,
  newTextActionCreator0,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { Navigate } from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
  };
};

export default compose(
  connect(mapStateToProps, {newTextActionCreator0,addMessageActionCreator}),
  withAuthRedirect
)(Dialogs);
