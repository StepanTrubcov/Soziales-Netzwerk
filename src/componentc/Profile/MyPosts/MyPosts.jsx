import React from "react";
import c from "./MyPosts.module.css";
import PostConteiner from "./Post/PostConteiner";
import ProfileForm from './ProfileForm/ProfileForm'

const MyPosts = React.memo(props => {
  let newPostData = props.postData.map((message) => (
    <PostConteiner
      message={message.message}
      like={message.like}
      bild={message.bild}
    />
  ));

  let addPost = (values) => {
    props.addPostActionCreator(values.text,values.image);
  };
  
  return (
    <div>
      <div>
        <div>
          <h3>New post</h3>
        </div>
        <div className={c.img}>
        </div>
        <div>
        <h3>Text and Image address</h3>
      </div>
        <div className={c.newPost}>
          <ProfileForm onSubmit={addPost} />
        </div>
        <div>
          <h3>My posts</h3>
        </div>
      </div>
      <div className={c.posts}>{newPostData}</div>
    </div>
  )
}
);

export default MyPosts;
