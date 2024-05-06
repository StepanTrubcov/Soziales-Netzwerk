import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div className={c.page}>
      <img src="https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1713118909~exp=1713119509~hmac=f3cddbc51a512b50fc2d48bd328892d630bc6bede302d313de2ef02ea5523a27"></img>
      <ul>
      <p className={c.name}>Dimych R.</p>
      <p className={c.information}>Birthday: 25 June</p>
      <p className={c.information}>City: Moskay</p>
      <p className={c.information}>Education: МОУСОШ № 10</p>
      </ul>
     </div>
    )
}

export default ProfileInfo;