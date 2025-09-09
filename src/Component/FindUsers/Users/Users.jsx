import React from "react";
import c from './Users.module.css'
import { Link } from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";
import User from './User'

const Users = (props) => {
    return <div>
        <Paginator totalCount={props.totalCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} correntPage={props.correntPage} />
        <div className={c.signs} >
            {props.users.map(u => <div className={c.blok} >
                <div className={c.info} >
                    <div className={c.infoAvaButton} >
                        <Link to={'/profile/' + u.id} >
                            {u.photos.large && (<img className={c.ava} src={u.photos.large} />) || (<img className={c.ava} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fCSweSQMzmeX5qopa0M5wAj0aUByRHPKXA&s' />)}
                        </Link>
                    </div>
                    <div>
                        <Link className={c.Link} to={'/profile/' + u.id} >
                            {u.name}
                        </Link>
                        <div className={c.status} >
                            Status:{u.status && u.status || ' No'}
                        </div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} className={c.button} onClick={() => {
                                props.getFollowed(u.id)
                            }} >Un follow</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} className={c.button} onClick={() => {
                                props.getUnFollowed(u.id)
                            }
                            } >Follow</button>}
                    </div>
                </div>
            </div>
            )}
            {/* <User users={props.users} followingInProgress={props.followingInProgress} getFollowed={props.getFollowed} getUnFollowed={props.getUnFollowed} /> */}
        </div>
    </div>
}

export default Users;