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
    postData:state.profilePage.postData,
    newPostText:state.profilePage.newPostText,
    newPostImg:state.profilePage.newPostImg,
  }
 }

 let mapDispatchToProps = (dispatch) =>{
  return{
    dispatch:dispatch,
    addPost0:(text, img)=>{
      dispatch(addPostActionCreator(text, img));
    },
    newTextActionCreator:(newText)=>{
      dispatch(newTextActionCreator(newText));
    },
    newImgActionCreator:(newImg)=>{
      dispatch(newImgActionCreator(newImg));
    }
  }
 }

const MyPostsConteiner = connect(mapStateToProps,mapDispatchToProps) (MyPosts);

export default MyPostsConteiner;
