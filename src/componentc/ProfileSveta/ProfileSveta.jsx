import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Background from './Background/Background'

const Profile = (props) => {
    return <div>
      <Background />
      <ProfileInfo profileInfo={props.postDataSveta.profileInfo} />
     <div>
     <MyPosts postDataSveta={props.postDataSveta.postDataSveta} />
     </div>
    </div>
}

export default Profile;