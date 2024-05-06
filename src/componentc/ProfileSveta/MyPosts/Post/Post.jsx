import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return(
    <div className={c.post}>
      <div className={c.item}>
        <div className={c.bang}>
        <img src='https://img.freepik.com/free-psd/3d-illustration-of-person-with-glasses_23-2149436185.jpg?w=740&t=st=1714664218~exp=1714664818~hmac=dddfdc3b68bf4dcf59ebce56ab576262117d674ded418962ab0c419cb71ce494'></img>
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