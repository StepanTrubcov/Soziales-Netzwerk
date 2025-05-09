import React, { useState } from "react";
import c from './Message.module.css'

const Message = (props) =>{

    const [img,setImg] = useState(props.profile.ava)
    const [message,setMessage] = useState()

    const addMessage = () =>{
        props.addNewMessage(message,img)
        setMessage('')
    }

    const messageDialog = props.message.map((m)=>{
        return <div className={c.divMessage} ><img className={c.img} src={m.img} /><div className={c.text} >{m.message}</div> </div>
        })

    return<div className={c.message} >
            <div className={c.info} >
            <img className={c.ava} src={props.users.users[0].ava} />
                {props.users.users[0].name}
            </div>
            <div className={c.correspondence} >
            <div className={c.send} >
            {messageDialog}
            </div>
            <input onChange={(e)=>{setMessage(e.target.value)}} value={message} className={c.input} ></input>
            <button onClick={()=>{addMessage()}}  className={c.button} >Send</button>
            </div>
        </div>

}

export default Message;