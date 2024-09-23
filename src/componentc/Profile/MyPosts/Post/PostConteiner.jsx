import React from "react";
import Post from './Post'
import {connect} from 'react-redux'

let mapStateToProps = (state) =>{
    return{
      profileInfo:state.profilePage.profileInfo,
    }
   }


const PostConteiner =connect(mapStateToProps) (Post)

export default PostConteiner;
