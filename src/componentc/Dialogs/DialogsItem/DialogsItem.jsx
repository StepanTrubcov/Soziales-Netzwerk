import React from "react";
import c from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  if(!props.follow){
return
  }else{
    return (
      <div className={c.dialog}>
        <img className={c.ava} src={props.photos}></img>
        <NavLink className={c.name} activeClassName={c.activeLink} to={'/dialogs/'+ props.id} >
          {props.name}
        </NavLink>
      </div>
    );
  }
  };

  export default DialogsItem;