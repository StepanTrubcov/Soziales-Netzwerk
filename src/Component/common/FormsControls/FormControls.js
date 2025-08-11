import React from "react";
import c from './FormControls.module.css'

export const Input = ({ input, meta, ...props }) => {
    const spanError = meta.touched && meta.error;

    return (
        <div className={`${c.formControl} ${spanError ? c.error : ''}`}>
                <input {...input} {...props} />
            <div className={c.span} >
                {spanError && <span>{meta.error}</span>}
            </div>
        </div>
    );
};

