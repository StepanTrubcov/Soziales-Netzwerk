import React from "react";
import c from './Dialog.module.css'
import { Link } from "react-router-dom";
import Message from "./Message/Message";

const Dialog = (props) =>{

const linkDialog = props.users.users.map((u)=>{

    const linkTo = '/dialog/' + u.id;

return u.follow && (<div className={c.divLink} >{u.photos.large &&  (<img className={c.img} src={u.photos.large} />) || (<img className={c.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fCSweSQMzmeX5qopa0M5wAj0aUByRHPKXA&s' />)}<Link to={linkTo} className={c.Link}>{u.name}</Link></div>)
})

    return <div className={c.dialogs} >
        <Message profile={props.profile} message={props.message} users={props.users} addNewMessage={props.addNewMessage} />
        <div className={c.contact} >
   {linkDialog}
        </div>
    </div>
}

export default Dialog;