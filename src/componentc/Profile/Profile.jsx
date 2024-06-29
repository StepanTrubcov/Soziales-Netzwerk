import React from 'react';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Background from './Background/Background'

const Profile = (props) => {
    return <div>
      <Background />
      <ProfileInfo profileInfo={props.postData.profileInfo}/>
     <div>
     <MyPostsConteiner store={props.store} postData={props.postData.postData}  newPostText={props.newPost.newPostText} newPostImg={props.newPost.newPostImg}/>
     </div>
    </div>
}

export default Profile;