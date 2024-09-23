import React from "react";
import {
  addPostActionCreator,
  newTextActionCreator,
  newImgActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'

 let mapStateToProps = (state) =>{
  return{
    profileInfo:state.profilePage.profileInfo,
    postData:state.profilePage.postData,
    newPostText:state.profilePage.newPostText,
    newPostImg:state.profilePage.newPostImg,
  }
 }

const MyPostsConteiner = connect(mapStateToProps,{addPostActionCreator,newTextActionCreator,newImgActionCreator}) (MyPosts);

export default MyPostsConteiner;
