import React, { useState } from 'react';
import c from './ProfileInfo.module.css';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileReduxForm from './ProfileForm'
import settings from '../../../Images/settings.svg'

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    const mainPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData)=>{
        props.saveProfile(formData)
        setEditMode(false)
          }

    return (<div>
        <div className={c.page}>
            <img src={props.img}></img>
            {editMode ? <ProfileReduxForm initialValues={props.profile} onSubmit={onSubmit} mainPhoto={mainPhoto} /> : <ProfileInfoPage setEditMode={setEditMode} {...props} />}
        </div>
        <div>

        </div>
    </div>
    )
}

const ProfileInfoPage = (props) => {
    return<div>
     <ul>
        <div className={c.flex} >
        <p className={c.name}>{props.profile.fullName}</p><button className={c.button} onClick={() => { props.setEditMode(true) }} >Setting</button>
        </div>
        <p className={c.information}>looking For Job:{props.profile.lookingForAJob ? " Yes" : ' No' }</p>
        <p className={c.information}>about me:{props.profile.aboutMe}</p>
        <p className={c.information}>looking for job description:{props.profile.lookingForAJobDescription}</p>
        <p className={c.information}><ProfileStatusWithHook status={props.status} getUpdeteStatus={props.getUpdeteStatus} /></p>
    </ul>
    </div>
}



export default ProfileInfo;