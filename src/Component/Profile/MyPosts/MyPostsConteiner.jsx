import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import c from './MyPosts.module.css'
import { addPostActionCreator } from "../../../redux/profile_reducer";

const MyPostsConteiner = React.memo(props => {

    const Post = props.newPosts.map((n) => {
        return <div className={c.text} >
            <div>
                <img className={c.img} src={n.img} />
            </div>
            {n.text}
        </div>
    })

    return <MyPosts addPostActionCreator={props.addPostActionCreator} Posts={Post} />
})

const mapStateToProps = (state) => ({
    newPosts: state.profile.postData
})

export default connect(mapStateToProps, { addPostActionCreator })(MyPostsConteiner)