import React from "react";
import c from './DialogsForm.module.css'
import { Field,reduxForm } from "redux-form";

const MessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} >
        <div className={c.form} >
          <Field className={c.linie} placeholder={"Message"} name={'message'} component={'input'} />
          <button className={c.button}>Send</button>
        </div>
      </form>
    );
  };
  
  const DialogsReduxForm = reduxForm({
    form: "message",
  })(MessageForm);
  
  export default DialogsReduxForm;