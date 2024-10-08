import React, {useEffect, useState} from "react";

const ProfileStatusWithHook = (props) => {

let [editMode,setEditMode] = useState(false);

let [status,setStatus] = useState(props.status);

useEffect( () => {
  setStatus(props.status)
},[props.status] )

const activateEditMode = () =>{
  setEditMode(true);
}

const deActivateEditMode = () => {
  setEditMode(false);
  props.getUpdeteStatus(status)
};

const onStatusChange = (e) => {
  setStatus(e.currentTarget.value);
  };

    return (
      <div>
        { !editMode &&
          <div>
            status:
            <span onClick={activateEditMode}>
              {props.status || 'No'} 
            </span>
          </div>
        }
        {editMode && (
          <div>
            status:
            <input
            onChange={onStatusChange}
              autoFocus={true}
              onBlur={deActivateEditMode}
              value={status}
            />
          </div>
        )}
      </div>
    );
  };

export default ProfileStatusWithHook;
