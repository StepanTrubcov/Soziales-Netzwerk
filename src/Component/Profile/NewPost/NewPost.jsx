import React, { useState } from "react";
import c from './NewPost.module.css'
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../utils/validators'
import { Input } from "../../common/FormsControls/FormControls";

const NewPost = (props) => {

    const [img, setImg] = useState()

    let addPost = (form) => {
        props.addPostActionCreator(form.text, img);
        props.setNewPostWindow(false)
    };

    const mainPhoto = (photo) => {
        console.log(photo)
        setImg(photo)
    }

    const setNewPostWindow = () => {
        props.setNewPostWindow(false)
    }

    return <div className={c.NewPost} >
        <NewPostFormRedux mainPhoto={mainPhoto} onSubmit={addPost} />
        <button className={c.button} onClick={setNewPostWindow} >Cancellation</button>
    </div>
}

const maxLength30 = maxLengthCreator(30)

const NewPostForm = (props) => {
    return <form className={c.butDiv} onSubmit={props.handleSubmit} >
        <div className={c.info} >
            <p>Text:</p><Field  validate={[requiredField, maxLength30]} className={c.input} placeholder={"Enter your message"} name="text" component={Input} />
            <NewPostImg mainPhoto={props.mainPhoto} />
        </div>
        <button className={c.button} >New Post</button>
    </form>
}

const NewPostFormRedux = reduxForm({
    form: 'newPostForm'
})(NewPostForm)


const NewPostImg = (props) => {

    const [img, setImg] = useState(null);

    const handleAvatarClick = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                // Создаем временный URL для предпросмотра
                const imageUrl = URL.createObjectURL(file);
                setImg(imageUrl);
                props.mainPhoto(imageUrl)
            }
        };

        fileInput.click();
    };

    return <img
        onClick={handleAvatarClick} style={{ cursor: 'pointer', width: 70 }}
        className={c.ava}
        src={img && img || 'https://www.svgrepo.com/show/176893/instagram-social-media.svg'}
    />
}

export default NewPost;