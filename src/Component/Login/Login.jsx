import React from "react";
import c from './Login.module.css'
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addLogin } from "../../redux/auth_reducer";
import { requiredField, maxLengthCreator } from "../../utils/validators";
import CreatField, { Input } from "../common/FormsControls/FormControls";

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

const LoginForm = ({ handleSubmit, error }) => {

    return <form onSubmit={handleSubmit}>
        {CreatField("Login", "login", [requiredField, maxLength50], Input)}
        {CreatField("Password", "password", [requiredField, maxLength50], Input, { type: "password" })}
        <div className={c.checkbox}>
            {CreatField("rememderMe", "", [requiredField, maxLength50], "input", { type: "checkbox" })} rememder me
        </div>
        {error && <div className={c.formSummaryError} >
            {error}
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