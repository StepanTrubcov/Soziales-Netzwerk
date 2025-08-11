import React from "react";
import c from './Dialog.module.css'
import { Link } from "react-router-dom";
import MessageConteiner from "./Message/MessageConteiner";

const Dialog = (props) => {
    const linkDialog = props.dialogs.map((u) => {
        const linkTo = '/dialog/' + u.id;
        return <Link to={linkTo} className={c.divLink} >{u.photos.large && (<img className={c.img} src={u.photos.large} />) || (<img className={c.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fCSweSQMzmeX5qopa0M5wAj0aUByRHPKXA&s' />)}<div onClick={() => { props.onPageChanged(u.id) }} className={c.Link}>{u.name}</div></Link>
    })

    return <div className={c.dialogs} >
        <MessageConteiner bang={props.bang} message={props.message} addNewMessage={props.addNewMessage} />
        <div className={c.contact} >
            {linkDialog}
        </div>
    </div>
}


export default Dialog;