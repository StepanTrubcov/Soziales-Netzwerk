import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) =>{
    return <header className={s.header}>
    <img src="https://e7.pngegg.com/pngimages/743/818/png-clipart-vkontakte-computer-icons-social-media-social-networking-service-social-media-blue-text.png"></img>
    { props.isAuth ? <div className={s.navLink1}>{props.login}- <button className={s.button} onClick={props.logout} >Log out</button> </div> : <NavLink to={'/login'} className={s.navLink} >Login</NavLink>}
      
  </header>
}

export default Header;
