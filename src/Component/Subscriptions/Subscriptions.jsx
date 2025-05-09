import React from "react";
import c from './Subscriptions.module.css'

const Subscriptions = (props) => {

    const subscriptionsUser = props.users.users.map(u => {
        if (u.follow === true) {
            return <div className={c.blok} >
                {u.photos.large && (<img className={c.ava} src={u.photos.large} />) || (<img className={c.ava} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fCSweSQMzmeX5qopa0M5wAj0aUByRHPKXA&s' />)}
                <div className={c.name} >{u.name}</div>
            </div>
        }
    })

    return <div className={c.Subscriptions} >
        Subscriptions
        {subscriptionsUser}
    </div>
}

export default Subscriptions;