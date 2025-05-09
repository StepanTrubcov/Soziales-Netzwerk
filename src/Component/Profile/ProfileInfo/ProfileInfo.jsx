import React, { useState } from "react";
import c from './ProfileInfo.module.css'
import EditProfileInfo from "./EditProfileInfo/EditProfileInfo";

const ProfileInfo = (props) =>{

    const [edit,setEdit] = useState(true)

    const addNewInfo = (name,ava,years) =>{
        props.addInfoActionCreator(name,ava,years)
    }

    if(edit ===false){
        return <EditProfileInfo info={props.info} addNewInfo={addNewInfo} setEdit={setEdit} />
    }

    return <div  >
       {edit && (<div className={c.ProfileInfo}>
        <div>
            <img className={c.ava} src={props.info.ava} />
        </div>
        <div className={c.info} >
            <div className={c.name} >{props.info.name}</div>
            <div>{props.info.years} years</div>
            <div>id:{props.info.id}</div>
        </div>
        <div className={c.info} >
            <button onClick={()=>{setEdit(false)}} >Edit profile</button>
        </div>
        </div>)}
    </div>
}

export default ProfileInfo;