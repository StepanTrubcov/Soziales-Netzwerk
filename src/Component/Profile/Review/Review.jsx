import React from "react";
import c from './Review.module.css'

const Review = (props) =>{

    const setNewPostWindow = () =>{
        props.setNewPostWindow(true)
    }

    const setEditProfileWindow =()=>{
        props.setEditProfileWindow(false)
    }

    return <div className={c.Review}>
        <div className={c.name} >
        Review
        </div>
        <div>
        <button className={c.button} onClick={()=>{setNewPostWindow()}} >New Post</button>
        </div>
    </div>
}

export default Review;