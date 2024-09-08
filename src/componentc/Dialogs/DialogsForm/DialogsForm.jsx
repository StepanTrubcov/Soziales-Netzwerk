import React from "react";
import c from "./DialogsForm.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator,requiredField } from "../../../utils/validators/validators";

let maxLength50 = maxLengthCreator(50);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={c.form}>
        <Field
          validate={[requiredField,maxLength50 ]}
          className={c.linie}
          placeholder={"Message"}
          name={"message"}
          component={Input}
        />
        <button className={c.button}>Send</button>
      </div>
    </form>
  );
};

const DialogsReduxForm = reduxForm({
  form: "message",
})(MessageForm);

export default DialogsReduxForm;
