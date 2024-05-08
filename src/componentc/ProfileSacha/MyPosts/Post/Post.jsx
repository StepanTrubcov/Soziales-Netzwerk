import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return(
    <div className={c.post}>
      <div className={c.item}>
        <div className={c.bang}>
        <img src='https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556782.jpg?t=st=1714664310~exp=1714667910~hmac=604308e3699d7af2c0c7c934b29f9ef3be331648f82596ed0ae3d35b06413ff1&w=900'></img>
          <p className={c.name}>Sveta T.</p>
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