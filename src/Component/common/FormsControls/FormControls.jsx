import React from "react";
import c from './FormControls.module.css'
import { Field } from "redux-form";

export const Input = ({ input, meta: { touched, error }, ...props }) => {
    const spanError = touched && error;

    return (
        <div className={`${c.formControl} ${spanError ? c.error : ''}`}>
            <input {...input} {...props} />
            <div className={c.span} >
                {spanError && <span>{error}</span>}
            </div>
        </div>
    );
};

const CreatField = (placeholder, name, validators, component, props) => {
    return <div>
        <Field {...props} validate={validators} className={c.inputField} placeholder={placeholder} name={name} component={component} />
    </div>
}

export default CreatField;