import React from "react";
import c from "./Login.module.css";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder={"Email"} name={'email'} component={'input'} />
      </div>
      <div>
        <Field placeholder={"Password"} name={'password'} component={'input'} />
      </div>
      <div>
        <Field type={"checkbox"} name={'rememderMe'} component={'input'} /> rememder me
      </div>
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
console.log(formData)
  }
  return (
    <div className={c.information}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
