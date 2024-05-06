import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return(
    <div className={c.post}>
      <div className={c.item}>
        <div className={c.bang}>
        <img src='https://cspromogame.ru//storage/upload_images/avatars/755.jpg'></img>
          <p className={c.name}>Stepan T.</p>
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