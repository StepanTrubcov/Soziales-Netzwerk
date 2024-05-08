import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Background from './Background/Background'

const Profile = (props) => {
    return <div>
      <Background />
      <ProfileInfo />
     <div>
     <MyPosts postDataDimych={props.postDataDimych} />
     </div>
    </div>
}

export default Profile;