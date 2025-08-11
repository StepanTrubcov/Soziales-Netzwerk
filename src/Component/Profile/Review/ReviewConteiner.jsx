import React from "react";
import Review from './Review'
import { connect } from "react-redux";
import { setEditProfileWindow, setNewPostWindow } from "../../../redux/profile_reducer";

const ReviewConteiner = (props) => {
    return <Review setEditProfileWindow={props.setEditProfileWindow} setNewPostWindow={props.setNewPostWindow} />
}

export default connect(null, { setNewPostWindow, setEditProfileWindow })(ReviewConteiner);