import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator,newTextActionCreator,newImgActionCreator} from '../../../redux/profile-reducer'

const MyPosts = (props) => {
  let newPostData = props.postData.map((message) => (
    <Post
      dispatch={props.dispatch}
      message={message.message}
      like={message.like}
      bild={message.bild}
    />
  ));

  let newPostElement0 = React.createRef();

  let newPostElement1 = React.createRef();


  let addPost0 = () => {
    let text = newPostElement0.current.value;
    let img = newPostElement1.current.value;
    props.dispatch(addPostActionCreator(text,img));
  };

  let newText = () => {
    let newText = newPostElement0.current.value;
    props.dispatch(newTextActionCreator(newText));
  };

  let newImg = () => {
    let newImg = newPostElement1.current.value;
    props.dispatch(newImgActionCreator(newImg));
  };

  return (
    <div>
      <div>
        <div>
          <h3>New post</h3>
        </div>
        <div className={c.img}>
          <p>
            <h3>Text and Image address</h3>
          </p>
        </div>
        <div className={c.newPost}>
          <textarea
            onChange={newText}
            ref={newPostElement0}
            className={c.line}
            value={props.newPostText}
          />
          <textarea
            onChange={newImg}
            ref={newPostElement1}
            className={c.line}
            value={props.newPostImg}
          />
          <button className={c.button} onClick={addPost0}>
            Abb post
          </button>
        </div>
        <div>
          <h3>My posts</h3>
        </div>
      </div>
      <div className={c.posts}>{newPostData}</div>
    </div>
  );
};

export default MyPosts;
