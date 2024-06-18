const ADD_POST = "ADD-POST";
const UPDATTE_NEW_POST_TEXT = "UPDATTE-NEW-POST-TEXT";
const UPDATTE_NEW_POST_IMG = "UPDATTE-NEW-POST-IMG";
const ADD_LIKE = "ADD-LIKE";

const profileReducer = (state, action) => {
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
