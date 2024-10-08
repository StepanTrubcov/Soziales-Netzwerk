import React from 'react';
import c from './Post.module.css';

const Post = (props) => {

  return (
    <div className={c.post}>
      <div className={c.item}>
        <div className={c.bang}>
          <img src={props.img}></img>
          <p className={c.name}>Stepan T.</p>
        </div>
        <div className={c.text}>
          {props.message}
        </div>
        <div className={c.bild}>
          <img src={props.bild} />
        </div>
        <div className={c.like} >
          like:
          {props.like}
          <button className={c.button} >
            <img src='https://icon-icons.com/icons2/1744/PNG/512/3643770-favorite-heart-like-likes-love-loved_113432.png' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post;