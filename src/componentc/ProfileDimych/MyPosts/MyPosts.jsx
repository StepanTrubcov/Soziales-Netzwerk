import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

  let newPostData = props.postDataDimych.map((message) => <Post message={message.message} like={message.like} bild={message.bild}/>)
    return<div>
      <div className={c.posts}>
        {newPostData}
      </div>
      </div>     
}

export default MyPosts;