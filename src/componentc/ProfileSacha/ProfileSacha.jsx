import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Background from './Background/Background'

const Profile = (props) => {
    return <div>
      <Background />
      <ProfileInfo profileInfo={props.postDataSacha.profileInfo}/>
     <div>
     <MyPosts postDataSveta={props.postDataSacha.postDataSacha} />
     </div>
    </div>
}

export default Profile;