import React from "react";
import PropTypes from "prop-types";
import NewPost from "./NewPost";
import { connect } from "react-redux";
import { addPostActionCreator, setNewPostWindow } from "../../../redux/profile_reducer";

const NewPostContainer = (props) => {
    return <NewPost addPostActionCreator={props.addPostActionCreator} setNewPostWindow={props.setNewPostWindow} />;
}

export default connect(null, { setNewPostWindow, addPostActionCreator })(NewPostContainer);