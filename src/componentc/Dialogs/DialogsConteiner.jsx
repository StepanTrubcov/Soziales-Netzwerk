import React from "react";
import {
  addMessageActionCreator,getUsers
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { Navigate } from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from "redux";
import Spinner from "../common/Preloader/Preloader";

class DialogsConteiner extends React.Component{
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  render(){
    if(this.props.dialogsData === null){
      <Spinner/>
    }else{
return <Dialogs {...this.props} />}
  }
}


let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
    currentPage:state.messagesPage.currentPage,
    pageSize:state.messagesPage.pageSize,
  };
};

export default compose(
  connect(mapStateToProps, {addMessageActionCreator,getUsers}),
  withAuthRedirect
)(DialogsConteiner);
