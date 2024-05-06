import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div className={c.page}>
      <img src="https://cspromogame.ru//storage/upload_images/avatars/755.jpg"></img>
      <ul>
      <p className={c.name}>Stepan T.</p>
      <p className={c.information}>Birthday: 17 June</p>
      <p className={c.information}>City: Rzhev</p>
      <p className={c.information}>Education: МОУСОШ № 1</p>
      </ul>
     </div>
    )
}

export default ProfileInfo;