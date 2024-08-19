import React from 'react';
import c from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) =>{
    return( <div>
              <div className={c.page}>
      <img src={props.profileInfo.img}></img>
      <ul>
      <p className={c.name}>{props.auth.login}</p>
      <p className={c.information}>email:{props.auth.email}</p>
      <p className={c.information}>id:{props.auth.id}</p>
      <p className={c.information}><ProfileStatus status={props.status} getUpdeteStatus={props.getUpdeteStatus} /></p>
      </ul>
     </div>
     </div>
    )
}

export default ProfileInfo;