import React from "react";
import { addLikeActionCreaton } from "../../../../redux/profile-reducer";
import Post from './Post'
import {connect} from 'react-redux'

 let mapDispatchToProps = (dispatch) =>{
  return{
    addLike : () => {
      dispatch(addLikeActionCreaton());
    }
  }
 }


const PostConteiner =connect(mapDispatchToProps) (Post)

export default PostConteiner;
