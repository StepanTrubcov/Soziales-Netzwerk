import React from "react";
import c from "./DialogsItem.module.css";
import { NavLink, Route, BrowserRouter, Routes } from "react-router-dom";

const DialogsItem = (props) => {
    return (
      <div className={c.dialog}>
        <img className={c.ava} src={props.ava}></img>
        <NavLink activeClassName={c.activeLink} to={'/dialogs/'+props.id} >
          {props.name}
        </NavLink>
      </div>
    );
  };

  export default DialogsItem;