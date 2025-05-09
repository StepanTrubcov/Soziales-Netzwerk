import React from "react";
import c from './Users.module.css'

const Users = (props) =>{
    return <div>
            <div className={c.Pagin} >
                {
                    props.pages.map(p =><div onClick={()=>{props.onPageChanged(p)}} className={props.correntPage === p && c.paginationActiv || c.pagination } >{p}</div>)
                }
            </div>
            {props.users.map(u => <div className={c.blok} >
            <div>

                {u.photos.large && (<img className={c.ava} src={u.photos.large} />) || (<img className={c.ava} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fCSweSQMzmeX5qopa0M5wAj0aUByRHPKXA&s' />)}

                {u.follow && (<button onClick={() => { props.UnFollowAC(u.id) }} >Un follow</button>) || (<button onClick={() => { props.followAC(u.id) }} >Follow</button>)}
            </div>
            <div className={c.info} >
                <div>
                    {u.name}
                    <div>
                        Status:{u.status && u.status || 'No'}
                    </div>
                </div>
            </div>
        </div>
    )}
    </div>
}

export default Users;