import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div className={c.page}>
      <img src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556782.jpg?t=st=1714664310~exp=1714667910~hmac=604308e3699d7af2c0c7c934b29f9ef3be331648f82596ed0ae3d35b06413ff1&w=900"></img>
      <ul>
      <p className={c.name}>Sacha G.</p>
      <p className={c.information}>Birthday: 25 April</p>
      <p className={c.information}>City: Rzhev</p>
      <p className={c.information}>Education: МОУСОШ № 1</p>
      </ul>
     </div>
    )
}

export default ProfileInfo;