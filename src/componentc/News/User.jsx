import React from "react";
import c from "./News.module.css";
import ava from "../../Images/ava.jpg";
import { NavLink } from "react-router-dom";

const User = ({u,followingInProgress,follow,unfollow}) => {
  return (
    <div>
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
                  disabled={followingInProgress.some((id) => id === u.id)}
                  className={c.button0}
                  onClick={() => {
                    follow(u.id);
                  }}
                >
                  unFollow
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id) => id === u.id)}
                  className={c.button0}
                  onClick={() => {
                    unfollow(u.id);
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
          </div>
        </div>
    </div>
  );
};

export default User;
