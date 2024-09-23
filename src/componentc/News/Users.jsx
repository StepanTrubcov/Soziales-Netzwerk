import React from "react";
import c from "./News.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({pageSize,onPageChanged,totalUsersCount,users,...props}) => {
  return (
    <div>
      <div className={c.text}>Users</div>
      {users.map((u) => (
        <User key={u.id} follow={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress} u={u} /> 
      ))}
      <hr className={c.lines}></hr>
      <div className={c.pagination}>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />
      </div>
    </div>
  );
};

export default Users;
