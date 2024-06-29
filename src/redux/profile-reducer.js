const ADD_POST = "ADD-POST";
const UPDATTE_NEW_POST_TEXT = "UPDATTE-NEW-POST-TEXT";
const UPDATTE_NEW_POST_IMG = "UPDATTE-NEW-POST-IMG";
const ADD_LIKE = "ADD-LIKE";

let initialState = {
  postData: [
    {
      message: "Hi, how are you?",
      like: 356,
      bild: "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-28.jpg",
      id: 1,
    },
    {
      message: "Cool picture?",
      like: 334,
      bild: "https://img.freepik.com/free-photo/bus-rural-surroundings-daylight_23-2149125544.jpg?t=st=1712758552~exp=1712762152~hmac=3d7a3b204620479df57f93ae73eaf1df777337566838cc95fb83705f3bedb9d0&w=360",
      id: 2,
    },
    {
      message: "It's my first post",
      like: 35,
      bild: "https://i.pinimg.com/originals/67/0d/e1/670de17faf5150f7e3b76fe0b9b541e7.jpg",
      id: 3,
    },
  ],
  profileInfo: {
    img: "https://cspromogame.ru//storage/upload_images/avatars/755.jpg",
    name: "Stepan T.",
    Birthday: "Birthday: 17 June",
    City: "City: Rzhev",
    Education: "Education: МОУСОШ № 1",
  },
  newPostText: "Hello",
  newPostImg: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        bild: state.newPostImg,
        message: state.newPostText,
        like: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      state.newPostImg = "";
      return state;
    case UPDATTE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    case UPDATTE_NEW_POST_IMG:
      state.newPostImg = action.newImg;
      state.newMessageText = action.newText;
      return state;
    case ADD_LIKE:
      state.postData[0].like = state.postData[0].like + 1;
      return state;
      default:
        return state;
  }
};

export const newTextActionCreator = (newText) => ({
    type: UPDATTE_NEW_POST_TEXT,
    newText: newText,
});

export const newImgActionCreator = (newImg) => ({
    type: UPDATTE_NEW_POST_IMG,
    newImg: newImg,
});
export const addLikeActionCreaton =()=>({
    type:ADD_LIKE
  })

  export const addPostActionCreator = (text,img) => ({
    type: ADD_POST,
    text: text,
    img: img,

});

export default profileReducer;
