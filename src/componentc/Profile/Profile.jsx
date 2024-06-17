import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Background from './Background/Background'

const Profile = (props) => {
    return <div>
      <Background />
      <ProfileInfo profileInfo={props.postData.profileInfo}/>
     <div>
     <MyPosts postData={props.postData.postData} dispatch={props.dispatch} newPostText={props.newPost.newPostText} newPostImg={props.newPost.newPostImg}/>
     </div>
    </div>
}

export default Profile;