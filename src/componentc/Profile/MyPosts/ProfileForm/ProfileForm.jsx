import React from "react";
import { Field, reduxForm } from "redux-form";
import c from "./ProfileForm.module.css";
import {
  requiredField,
  maxLengthCreator,
} from "../../../../utils/validators/validators";
import { Input } from "../../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(15);
const Profile = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={c.form}>
        <Field
          validate={[requiredField, maxLength10]}
          className={c.line}
          placeholder={"Text"}
          name={"text"}
          component={Input}
        />
        <Field
          className={c.line}
          placeholder={"Image"}
          name={"image"}
          component={"input"}
        />
        <button className={c.button}>Abb post</button>
      </div>
    </form>
  );
};

const ProfileReduxForm = reduxForm({
  form: "profile",
})(Profile);

export default ProfileReduxForm;
