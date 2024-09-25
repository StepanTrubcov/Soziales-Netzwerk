import React, { useState } from "react";
import c from "../../News/News.module.css";
import cn from 'classnames'

const Paginator = ({ currentPage, totalUsersCount, pagePaginatorSize, onPageChanged, portionSize = 10 }) => {
  let pageSize = Math.ceil(totalUsersCount / pagePaginatorSize);

  let pages = [];

  for (let i = 1; i <= pageSize; i++) {
    pages.push(i);
  }

  let v = '>'
  let n = '<'

  let portionCount = Math.ceil(pageSize / portionSize);
  let [portionNumber, setPortionNumber] = useState(1)
  let currentLeftBorder = (portionNumber - 1) * portionSize + 1;
  let currentRightBorder = portionNumber * portionSize;
  return (
    <div>
      <div className={c.pagination}>
        {portionNumber > 1 &&
          <button className={c.n} onClick={() => { setPortionNumber(portionNumber - 1) }} >{n}</button>}
        <div className={c.div}>
          {pages.filter(p => currentLeftBorder <= p && p <= currentRightBorder).map((p) => (
            <button
              className={currentPage === p ? c.number : c.number}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </button>
          ))}
        </div>
        {portionCount > portionNumber && <button className={c.v} onClick={() => { setPortionNumber(portionNumber + 1) }}>{v}</button>}
      </div>
    </div>
  );
};

export default Paginator;
