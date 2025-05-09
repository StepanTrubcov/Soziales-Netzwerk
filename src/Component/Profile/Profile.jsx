import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfoConteiner";
import Cover from "./Cover/Cover";
import MyPosts from "./MyPosts/MyPostsConteiner";

const Profile = (props) =>{
    return <div>
        <Cover/>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}

export default Profile;