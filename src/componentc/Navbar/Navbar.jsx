import React from "react";
import { NavLink } from "react-router-dom";
import FriendsItem from "./NavItem/NavItem";
import s from "./Navbar.module.css";

const Nav = (props) => {

  let newFriendsData = props.users.map(u => (
    <FriendsItem followed={u.followed} photos={u.photos} name={u.name}/>
  ));

  return (
          <nav className={s.nav}>
            <div className={s.item}>
              <NavLink activeClassName={s.activeLink} to="/profile">
                Profile
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink activeClassName={s.activeLink} to="/dialogs">
                Messages
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink activeClassName={s.activeLink} to="/news">
                Users
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink activeClassName={s.activeLink} to="/music">
                Music
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink activeClassName={s.activeLink} to="/settings">
                Settings
              </NavLink>
            </div>
            <div className={s.Friends}>
              <p>Friends:</p>
              {newFriendsData}
            </div>
          </nav>
        );
};

export default Nav;
