import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Background from './Background/Background'

const Profile = (props) => {
    return <div>
      <Background />
      <ProfileInfo profileInfo={props.postDataVasay.profileInfo}/>
     <div>
     <MyPosts postDataVasay={props.postDataVasay.postDataVasay} />
     </div>
    </div>
}

export default Profile;