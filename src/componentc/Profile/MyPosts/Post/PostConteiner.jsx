import React from "react";
import { addLikeActionCreaton } from "../../../../redux/profile-reducer";
import Post from './Post'

const PostConteiner = (props) => {
  const addLike = () => {
    props.dispatch(addLikeActionCreaton());
  };

  return (
    <Post
      addLike={addLike}
      message={props.message}
      like={props.like}
      bild={props.bild}
    />
  );
};

export default PostConteiner;
