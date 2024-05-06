import React from "react";
import c from "./Message.module.css";
import { NavLink, Route, BrowserRouter, Routes } from "react-router-dom";

const Messages = (props) => {
    return (
      <div>
        <div className={c.messages}>
        <div className={c.page}>
            <img src={props.img}></img>
            <ul>
            <NavLink className={c.name} to={props.to} ><p>{props.name}</p></NavLink>
          <div className={c.message}>{props.message}</div>
          </ul>
        </div>
      </div>
    </div>
    );
  };

  export default Messages;