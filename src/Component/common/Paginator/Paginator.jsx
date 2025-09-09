import React, { useState } from "react";
import c from './Paginator.module.css'

const Paginator = ({ totalCount, pageSize, correntPage, onPageChanged, positionSize = 10 }) => {

    const pagesCount = Math.ceil(totalCount / pageSize)

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / positionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * positionSize + 1
    let rigthPortionPageNumber = portionNumber * positionSize


    return <div className={c.Pagin} >
        {portionNumber > 1 && <button className={c.button}  onClick={()=>setPortionNumber(portionNumber - 1)} >{"<<"}</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
            .map(p => <div
                onClick={() => { onPageChanged(p) }}
                className={correntPage === p && c.paginationActiv || c.pagination} >
                {p}
            </div>)}
        {portionNumber < portionCount && <button className={c.button} onClick={()=>setPortionNumber(portionNumber + 1)} >{">>"}</button>}
    </div>
}

export default Paginator;