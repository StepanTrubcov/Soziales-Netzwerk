import React from "react";
import c from "./News.module.css";
import ava from "../../Images/ava.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { followAPI } from "../../Api/api";

const Users = (props) => {
  let pageSize = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageSize; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={c.text}>Users</div>
      {props.users.map((u) => (
        <div key={u.id} className={c.line}>
          <div className={c.avaButton}>
            <div>
              <NavLink to={"/profileUsers/" + u.id}>
                <img
                  className={c.ava}
                  src={u.photos.small != null ? u.photos.small : ava}
                ></img>
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={c.button0}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  unFollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={c.button0}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={c.info}>
            <div>
              <div className={c.name}>{u.name}</div>
              <div className={c.comment}>{u.status}</div>
            </div>
            <div className={c.city0}>
              <div className={c.city1}>{"u.location.country"}</div>
              <div className={c.country}>{"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
      <hr className={c.lines}></hr>
      <div className={c.pagination}>
        {pages.map((p) => (
          <button
            className={c.number}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
