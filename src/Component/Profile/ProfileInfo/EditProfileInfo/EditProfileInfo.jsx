import React, { useState } from "react";
import c from './EditProfileInfo.module.css'

const EditProfileInfo = (props) =>{
    console.log(props.info)
    const [newAva, setNewAva ] = useState(props.info.ava)
    const [newName, setNewName ] = useState(props.info.name)
    const [years, setYears ] = useState(props.info.years)

    const addAva = (e) =>{
        if (e.target.files.length) {
            setNewAva(URL.createObjectURL(e.target.files[0]))
        }
    }

    console.log(years)

    const addInfo = () =>{
        props.addNewInfo(newName,newAva,years)
        props.setEdit(true)
    }

return<div className={c.infoEdit}>
<div>Change avatar:{newAva&&(<img className={c.img} src={newAva} />)}<input onChange={addAva} className={c.inpuFile} type='file' /></div>
<div>Edit name:<input value={newName} onChange={(e)=>{setNewName(e.target.value)}} className={c.input} /></div>
<div>Edit years:<input value={years} type="number" onChange={(e)=>{setYears(e.target.value) }} className={c.input} /></div>
<div>
<button className={c.button} onClick={()=>{addInfo()}} >Save</button>
</div>
</div>
}

export default EditProfileInfo