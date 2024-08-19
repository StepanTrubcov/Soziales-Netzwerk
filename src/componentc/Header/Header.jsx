import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) =>{
    return <header className={s.header}>
    <img src="https://e7.pngegg.com/pngimages/743/818/png-clipart-vkontakte-computer-icons-social-media-social-networking-service-social-media-blue-text.png"></img>
    { props.isAuth ? <NavLink to={'/login'} className={s.navLink} >{props.login}</NavLink> : <NavLink to={'/login'} className={s.navLink} >Login</NavLink>}
      
  </header>
}

export default Header;
