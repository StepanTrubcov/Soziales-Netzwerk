import React from "react";
import {
  addPostActionCreator,
  newTextActionCreator,
  newImgActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsConteiner = (props) => {

let state = props.store.getState();

  let addPost0 = (text, img) => {
   props.store.dispatch(addPostActionCreator(text, img));
  };

  let newText = (newText) => {
    props.store.dispatch(newTextActionCreator(newText));
  };

  let newImg = (newImg) => {
    props.store.dispatch(newImgActionCreator(newImg));
  };

  return (
    <MyPosts
      addPost0={addPost0}
      newTextActionCreator={newText}
      newImgActionCreator={newImg}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
      newPostImg={state.profilePage.newPostImg}
      dispatch={props.store.dispatch}
    />
  );
};

export default MyPostsConteiner;
