import React from "react";
import c from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import {createField, Input} from '../common/FormsControls/FormsControls'
import {maxLengthCreator,requiredField} from '../../utils/validators/validators'
import { Navigate } from "react-router-dom";

let maxLength30  = maxLengthCreator(30)

const LoginForm = ({handleSubmit,error}) => {
  return (
    <form onSubmit={handleSubmit} >
      {createField(c.line,[requiredField,maxLength30],"Email",'email',Input)}
      {createField(c.line,[requiredField,maxLength30],"Password",'password',Input,{type:'password'})}
      {createField(c.line,[requiredField,maxLength30],"Password",'rememderMe',Input,{type:'checkbox'} , ' rememder me' )}
      { error && <div className={c.formSymmaryError} >
        {error}
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

const Login = ({login,isAuth}) => {
  const onSubmit = (formData)=>{
login(formData.email,formData.password,formData.rememderMe)
  }
  if(isAuth){
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
