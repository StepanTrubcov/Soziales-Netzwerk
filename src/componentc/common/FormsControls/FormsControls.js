import React from "react";
import c from './FormsControls.module.css'

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
