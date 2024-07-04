import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
console.log({props})
    return( 
              <div className={c.page}>
      <img src={props.profileInfo.img}></img>
      <ul>
      <p className={c.name}>{props.profileInfo.name}</p>
      <p className={c.information}>{props.profileInfo.Birthday}</p>
      <p className={c.information}>{props.profileInfo.City}</p>
      <p className={c.information}>{props.profileInfo.Education}</p>
      </ul>
     </div>
    )
}

export default ProfileInfo;