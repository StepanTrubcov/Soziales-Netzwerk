import React, { useState } from "react";
import c from './Message.module.css'
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators";
import { Input } from "../../common/FormsControls/FormControls";

const Message = (props) => {

    const addMessage = (form) => {
        props.addNewMessage(form.message)
    }

    let messageDialog = props.message.map((m) => {
        return <div className={c.divMessage} >You: <div className={c.text} >{m}</div> </div>
    })

    return <div className={c.message} >
        <div className={c.info} >
            {props.bang.length === 0 && <div>Choose who you want to write to</div> || <div className={c.bang} ><img className={c.imgBang} src={props.bang.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fCSweSQMzmeX5qopa0M5wAj0aUByRHPKXA&s'} /><div className={c.name} >{props.bang.fullName}</div></div>}
        </div>
        <div className={c.correspondence} >
            <div className={c.send} >
                {props.message.length === 0 && <div className={c.start} >Start a conversation</div> || messageDialog}
            </div>
            <DialogsFormRedux onSubmit={addMessage} />
        </div>
    </div>

}


const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
        <Field className={c.input} placeholder={"Enter your message"} name="message" component={'input'} />
        <button className={c.button} >Send</button>
    </form>
}

const DialogsFormRedux = reduxForm({
    form: 'message'
})(DialogsForm)

export default Message;