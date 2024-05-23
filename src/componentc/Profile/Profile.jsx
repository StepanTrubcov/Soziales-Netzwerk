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
     <MyPosts addLike={props.addLike} postData={props.postData.postData} addPost={props.addPost} newPostText={props.newPostText} newPostImg={props.newPostImg} updateNewPostText={props.updateNewPostText} updateNewPostImg={props.updateNewPostImg}/>
     </div>
    </div>
}

export default Profile;