import React, { useState } from "react";
import c from './MyPosts.module.css'


const MyPosts = (props) => {
    return <div className={c.MyPosts} >
        <div className={c.name} >
           Posts
        </div>
        <div className={c.newPost} >
            {props.Posts}
        </div>
    </div>
}

export default MyPosts;