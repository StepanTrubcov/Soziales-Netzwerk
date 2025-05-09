import React from "react";
import Dialog from "./Dialogs";
import { connect } from "react-redux";
import { addNewMessage } from "../../redux/Dialogs_reducer";

const DialogsConteiner = (props) =>{
    return <Dialog addNewMessage={props.addNewMessage} profile={props.profile} message={props.message} users={props.users} />
}

const mapStateToProps = (state) =>({
    profile:state.profile,
    message:state.message.message,
    users:state.users
})

export default connect(mapStateToProps,{addNewMessage})(DialogsConteiner);