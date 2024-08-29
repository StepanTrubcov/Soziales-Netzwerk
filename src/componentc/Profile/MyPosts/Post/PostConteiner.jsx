import React from "react";
import Post from './Post'
import {connect} from 'react-redux'

 let mapDispatchToProps = (dispatch) =>{
 }


const PostConteiner =connect(mapDispatchToProps) (Post)

export default PostConteiner;
