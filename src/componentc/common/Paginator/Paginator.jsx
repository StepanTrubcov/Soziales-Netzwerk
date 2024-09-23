import React from "react";
import c from "../../News/News.module.css";

const Paginator = (props) => {
  let pageSize = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageSize; i++) {
    pages.push(i);
  }
  return (
    <div>
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

export default Paginator;
