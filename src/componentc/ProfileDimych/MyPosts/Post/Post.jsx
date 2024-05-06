import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return(
    <div className={c.post}>
      <div className={c.item}>
        <div className={c.bang}>
        <img src='https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1713118909~exp=1713119509~hmac=f3cddbc51a512b50fc2d48bd328892d630bc6bede302d313de2ef02ea5523a27'></img>
          <p className={c.name}>Dimych R.</p>
        </div>
        <div className={c.text}>
        { props.message }
      </div>
        <div className={c.bild}>
          <img src={props.bild}/>
        </div>
      <div>
        like: 
        { props.like }
      </div>
     </div>
     </div>
    )
}

export default Post;