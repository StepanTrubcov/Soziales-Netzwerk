import React from "react";
import c from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import {Input} from '../common/FormsControls/FormsControls'
import {maxLengthCreator,requiredField} from '../../utils/validators/validators'
import { Navigate } from "react-router-dom";

let maxLength30  = maxLengthCreator(30)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field className={c.line} validate={[requiredField,maxLength30]} placeholder={"Email"} name={'email'} component={Input} />
      </div>
      <div>
        <Field type={'password'} className={c.line} validate={[requiredField,maxLength30]} placeholder={"Password"} name={'password'} component={Input} />
      </div>
      <div>
        <Field type={"checkbox"} name={'rememderMe'} component={Input} /> rememder me
      </div>
      { props.error && <div className={c.formSymmaryError} >
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData)=>{
props.login(formData.email,formData.password,formData.rememderMe)
  }
  if(props.isAuth){
return <Navigate replace to="/profile" />;
  }
  return (
    <div className={c.information}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
