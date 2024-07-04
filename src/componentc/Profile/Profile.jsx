import React from 'react';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import ProfileInfoConteiner from './ProfileInfo/ProfileInfoConteiner';
import Background from './Background/Background'

const Profile = (props) => {
    return <div>
      <Background />
      <ProfileInfoConteiner />
     <div>
     <MyPostsConteiner />
     </div>
    </div>
}

export default Profile;