import React from "react";
import c from './Header.module.css'
import { Link } from "react-router-dom";

const Header = (props) => {
    return <div className={c.Header} >
        Soziales-Netzwerk
        <div className={c.loginBlok} >
            {props.userInfo.login &&
                <button onClick={props.deleteLogin}  >Logout</button> ||
                <Link to='/login' className={c.Link} >Login</Link>
            }
        </div>
    </div>
}

export default Header;