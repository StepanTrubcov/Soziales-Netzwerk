import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfoConteiner";
import MyPosts from "./MyPosts/MyPostsConteiner";
import c from './Profile.module.css'
import ReviewConteiner from "./Review/ReviewConteiner";
import NewPostConteiner from "./NewPost/NewPostConteiner";
import SubscriptionsConteiner from '../Subscriptions/SubscriptionsConteiner'

const Profile = (props) => {
    if (props.profileId === 32372) {
        return <div>
            <div className={c.info} >
            <ProfileInfo profileId={props.profileId} profile={props.profile} />
            <ReviewConteiner/>
            </div>
           {props.newPostWindow && <NewPostConteiner/>}
            <div className={c.info}>
            <MyPosts />
            <SubscriptionsConteiner/>
            </div>
        </div>
    } else {
        return <div>
            <ProfileInfo profileId={props.profileId} profile={props.profile} />
        </div>
    }
}

export default Profile;