import React from "react";
import c from './FormsControls.module.css'
import { Field, reduxForm } from "redux-form";

export const Input = ({meta,input,...props}) => {
    const condition = meta.touched && meta.error;
  return (
    <div className={c.form + " " + (condition ? c.error : '')}>
        <div>
        <input {...input} {...props} />
        </div>
        { condition && <span>{meta.error}</span>}
    </div>
  );
};

export const createField = (c,validate,placeholder,name,component,props={},text ="") =>{
  return<div>
  <Field className={c} validate={validate} placeholder={placeholder} name={name} component={component} {...props} />{text}
</div>
}
