import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

let newPostData = props.postData.map((message)=>(<Post message={message.message} like={message.like} bild={message.bild} />))

let newPostElement = React.createRef();

let abbPost = () =>{
let text = newPostElement.current.value;
alert(text);
}
    return<div>
    <div> 
      <div><h3>My posts</h3></div>
      <div className={c.newPost}> 
      <textarea ref={newPostElement}></textarea>
      <button className={c.button} onClick={ abbPost }>Abb posts</button>
      </div>
      </div>
      <div className={c.posts}>
        {newPostData}
      </div>
      </div>     
}

export default MyPosts;