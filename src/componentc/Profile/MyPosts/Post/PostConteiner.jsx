import React from "react";
import Post from './Post'
import {connect} from 'react-redux'

let mapStateToProps = (state) =>{
    return{
      img:state.profilePage.img,
    }
   }


const PostConteiner =connect(mapStateToProps)(Post)

export default PostConteiner;
