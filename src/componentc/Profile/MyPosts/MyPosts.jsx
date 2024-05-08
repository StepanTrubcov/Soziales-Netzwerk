import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

let newPostData = props.postData.map((message)=>(<Post message={message.message} like={message.like} bild={message.bild} />))

    return<div>
    <div> 
      <div><h3>My posts</h3></div>
      <div>
      <textarea></textarea>
      </div>
      <div>
      <button>Abb posts</button>
      </div>
      </div>
      <div className={c.posts}>
        {newPostData}
      </div>
      </div>     
}

export default MyPosts;