import React from "react"
import c from './ProfileUsers.module.css'
import Preloader from '../common/Preloader/Preloader'
import ava from '../../Images/ava.jpg'
import axios from 'axios'
import ProfileStatus from "../Profile/ProfileInfo/ProfileStatus"

const ProfileUsers = (props) =>{
    if(!props.profile){
        return <Preloader/>
      }
    return( <div>
    <div className={c.page}>
              <img src={props.profile.photos.large != null ? props.profile.photos.large : ava}></img>
              <ul>
      <p className={c.name}>{props.profile.fullName}</p>
      <p className={c.information}>Github:{props.profile.github != null ? props.profile.github : 'No'}</p>
      <p className={c.information}>Youtube:{props.profile.youtube != null ? props.profile.youtube : 'No'}</p>
      <p className={c.information}>Description:{props.profile.aboutMe != null ? props.profile.aboutMe : 'No'}</p>
      <p className={c.information}>Status:{props.status != null ? props.status : 'No'}</p>
      </ul>
     </div>
     </div>
    )
}

export default ProfileUsers;