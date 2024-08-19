import React from "react";
import c from './Login.module.css'
import funny from '../../Images/funny.png'
import sad from '../../Images/sad.png'

const Login = (props) => {
    if(!props.isAuth){
        return (<div className={c.information}>
            <img src={sad} className={c.img} ></img>
            <p className={c.text}>You are not registered, go to this site and register or log in to your account:</p>
            <p className={c.link} >'https://social-network.samuraijs.com/'</p>
        </div>
        )
    }
  return  <div className={c.information}>
    <img className={c.img} src={funny} ></img>
        <p className={c.link}>You are registered.</p>
    </div>
};

export default Login;