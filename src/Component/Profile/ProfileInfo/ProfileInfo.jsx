import React, { useEffect, useState } from "react";
import c from './ProfileInfo.module.css'
import Prelouder from "../../common/prelouder";

const ProfileInfo = (props) => {

    const [aboutMe, setAboutMe] = useState(true)
    const [status, setStatus] = useState(props.info.status)
    const [avatar, setAvatar] = useState(props.profile?.photos.large);

    useEffect(() => {
        setStatus(props.info.status)
    }, [props.info.status])

    const handleAvatarClick = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                // Создаем временный URL для предпросмотра
                const imageUrl = URL.createObjectURL(file);
                setAvatar(imageUrl);

                // Отправляем сам файл, а не URL
                props.NewPhoto(file);
            }
        };

        fileInput.click();
    };

    const addAboutMe = () => {
        setAboutMe(true)
        props.updateStatus(status)
    }

    if (!props.profile) {
        return <Prelouder />
    }

    return <div className={c.name} >
        {props.info.EditProfileWindow && (<div className={c.ProfileInfo}>
            <div onClick={handleAvatarClick} style={{ cursor: 'pointer' }}>
                <img
                    className={c.ava}
                    src={props.profile.photos.large && avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fCSweSQMzmeX5qopa0M5wAj0aUByRHPKXA&s'}
                    alt="Аватар"
                />
            </div>
            <div className={c.info} >
                <div className={c.name} >{props.profile.fullName}</div>
                <div>Looking for a Job: {props.profile.lookingForAJob && ' Yes' || ' No'}</div>
                <div>id: {props.profile.userId}</div>
                <div className={c.about} >Status:{!aboutMe &&
                    <div><input autoFocus={true} onChange={(e) => { setStatus(e.target.value) }} value={status} className={c.input} /> <button onClick={() => { addAboutMe() }} >Send</button></div> ||
                    <div onClick={() => setAboutMe(false)} >{props.info.status && props.info.status || 'No'}</div>
                }</div>
            </div>
        </div>)}
    </div>
}

export default ProfileInfo;