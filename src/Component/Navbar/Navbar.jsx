import React from "react";
import { Link } from "react-router-dom";
import c from './Navbar.module.css'

const Navbar = (props) => {
    return <div className={c.Navbar} >
        <div><Link className={c.Link} to='/profile' >Profile</Link></div>
        <div><Link className={c.Link} to='/dialog' >Message</Link></div>
        <div><Link className={c.Link} to='/findUsers' >Find users</Link></div>
        <div><Link className={c.Link} to='/musik' >Musik</Link></div>
        <div>
            {/* <Subscriptions /> */}
        </div>
    </div>
}

export default Navbar;