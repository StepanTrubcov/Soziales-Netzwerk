import React, { useState } from "react";
import c from './MyPosts.module.css'

const MyPosts = (props) =>{
    const [img, setImg] = useState()
    const [text, setText] = useState()

    let addPost = () => {
        props.addPostActionCreator(text,img);
        setText('')
        setImg('')
      };

    const mainPhoto = (e) => {
        if (e.target.files.length) {
            setImg(URL.createObjectURL(e.target.files[0]))
        }
    }

    const mainText = (e) => {
        setText(e.target.value)
    }

    return <div className={c.MyPosts} >
        <div className={c.name}>
        My posts
        <div className={c.butDiv} >
        Text:<input className={c.input} onChange={mainText} type='text' value={text}/>
        Image:{img && <img className={c.image} src={img}/>}<input className={c.inputFile} type='file' onChange={mainPhoto} />
        <button onClick={()=>{addPost()}} className={c.button} >New Post</button>
        </div>
        </div>
        <div className={c.newPost} >
            {props.Posts}
        </div>
    </div>
}

export default MyPosts;