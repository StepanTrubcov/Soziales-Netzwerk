import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return(
    <div className={c.post}>
      <div className={c.item}>
        <div className={c.bang}>
        <img src='https://img.freepik.com/premium-photo/a-cat-wearing-sunglasses-and-a-suit-with-a-tie_917213-21811.jpg?w=740'></img>
          <p className={c.name}>Vasay G.</p>
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