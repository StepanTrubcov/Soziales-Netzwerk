import React from "react"
import c from './ProfileInfo.module.css'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import { reduxForm } from "redux-form";

const ProfileInfoForm = ({handleSubmit,mainPhoto}) => {
    return<div>
        <form onSubmit={handleSubmit} >
        <ul>
            <div className={c.Fields} ><p className={c.name}>{createField('', [], "Full Name","fullName", Input)}</p></div>
            <div className={c.Fields} ><p className={c.information}>{createField('',[], "My professional skills", "lookingForAJobDescription", Input)}</p></div>
            <div className={c.Fields} ><p className={c.informationForm}>looking For Job:</p>{createField(c.for, [], "", "lookingForAJob", Input,{type:'checkbox'})}</div>
            <div className={c.Fields} ><p className={c.information}>{createField('',[], "About Me", "aboutMe", Input)}</p></div>
          <div className={c.Fields} ><p className={c.informationForm} >change avatar:</p><input className={c.input} type='file' onChange={mainPhoto} /></div>
            <button>save</button>
        </ul>
    </form>
    </div>
}

const ProfileReduxForm = reduxForm({
    form: "profileInfo",
})(ProfileInfoForm);

export default ProfileReduxForm;