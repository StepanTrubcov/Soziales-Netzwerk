import React from "react";
import c from "./NavItem.module.css";
import ava from "../../../Images/ava.jpg";

const FriendsItem = (props) => {
  if (props.followed === true) {
    return (
      <div>
        <div className={c.line}>
          <img
            className={c.ava}
            src={props.photos.small != null ? props.photos.small : ava}
          />
          <div className={c.name}>
          {props.name}
          </div>
        </div>
      </div>
    );
  }
};

export default FriendsItem;
