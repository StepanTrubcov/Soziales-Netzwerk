import React from "react";
import c from './Login.module.css'
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addLogin } from "../../redux/auth_reducer";
import {requiredField, maxLengthCreator } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormControls";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.addLogin(formData.login, formData.password, formData.rememderMe)
    }

    return <div className={c.Login} >
        <div className={c.blok} >
            <h1 className={c.name} >Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    </div>
}

const maxLength50 = maxLengthCreator(50)

const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[requiredField,maxLength50]} className={c.input} placeholder={"Login"} name="login" component={Input} />
        </div>
        <div>
            <Field validate={[requiredField,maxLength50]} className={c.input} placeholder={"Password"} name="password" component={Input} />
        </div>
        <div className={c.checkbox}>
            <Field type={"checkbox"} name="rememderMe" component={'input'} /> rememder me
        </div>
       {props.error && <div className={c.formSummaryError} >
            {props.error}
        </div>}
        <div>
            <button className={c.button} >Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default connect(null, { addLogin })(Login)