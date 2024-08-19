import React from "react";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import ProfileInfoConteiner from "./ProfileInfo/ProfileInfoConteiner";
import Background from "./Background/Background";
import {getStatus} from '../../redux/profile-reducer'

const Profile = (props)=> {
    return (
      <div>
        <div>
          <Background/>
        </div>
        <ProfileInfoConteiner/>
        <MyPostsConteiner/>
      </div>
    )
}

export default Profile;
