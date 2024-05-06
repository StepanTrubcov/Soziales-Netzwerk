import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div className={c.page}>
      <img src="https://img.freepik.com/free-psd/3d-illustration-of-person-with-glasses_23-2149436185.jpg?w=740&t=st=1714664218~exp=1714664818~hmac=dddfdc3b68bf4dcf59ebce56ab576262117d674ded418962ab0c419cb71ce494"></img>
      <ul>
      <p className={c.name}>Sveta T.</p>
      <p className={c.information}>Birthday: 14 Jule</p>
      <p className={c.information}>City: Moskay</p>
      <p className={c.information}>Education: МОУСОШ № 5</p>
      </ul>
     </div>
    )
}

export default ProfileInfo;