import React from "react";
import { Field, reduxForm } from "redux-form";
import c from './ProfileForm.module.css'

const Profile =(props)=>{
    return (
        <form onSubmit={props.handleSubmit} >
          <div className={c.form} >
            <Field className={c.line} placeholder={"Text"} name={'text'} component={'input'} />
            <Field className={c.line} placeholder={"Image"} name={'image'} component={'input'} />
            <button className={c.button}>Abb post</button>
          </div>
        </form>
      );
}

const ProfileReduxForm = reduxForm({
    form: "profile",
  })(Profile);

export default ProfileReduxForm;