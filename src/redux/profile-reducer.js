import { userAPI } from "../Api/api";

const ADD_POST = "ADD-POST";
const UPDATTE_NEW_POST_TEXT = "UPDATTE-NEW-POST-TEXT";
const UPDATTE_NEW_POST_IMG = "UPDATTE-NEW-POST-IMG";
const ADD_LIKE = "ADD-LIKE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
  status:'',
  newPostText: "Hello",
  newPostImg: "",
  profile: null,
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
      let stateCopy0 = { ...state };
      stateCopy0.postData = [...state.postData];
      stateCopy0.postData.push(newPost);
      stateCopy0.newPostText = "";
      stateCopy0.newPostImg = "";
      return stateCopy0;
    case UPDATTE_NEW_POST_TEXT:
      let stateCopy1 = { ...state };
      stateCopy1.newPostText = action.newText;
      return stateCopy1;
    case UPDATTE_NEW_POST_IMG:
      let stateCopy2 = { ...state };
      stateCopy2.newPostImg = action.newImg;
      return stateCopy2;
    case ADD_LIKE:
      let stateCopy3 = { ...state };
      stateCopy3.postData = [...state.postData];
      stateCopy3.postData[0].like = state.postData[0].like + 1;
      return stateCopy3;
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
      case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const newTextActionCreator = (newText) => ({
  type: UPDATTE_NEW_POST_TEXT,
  newText: newText,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status: status,
});

export const newImgActionCreator = (newImg) => ({
  type: UPDATTE_NEW_POST_IMG,
  newImg: newImg,
});
export const addLikeActionCreaton = () => ({
  type: ADD_LIKE,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});
export const addPostActionCreator = (text, img) => ({
  type: ADD_POST,
  text: text,
  img: img,
});

export const getProfileUsers = (userId) => {
  return (dispatch) => {
    userAPI.getUsersProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    userAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const getUpdeteStatus = (status) => {
  return (dispatch) => {
    userAPI.updeteStatus(status).then((response) => {
      if(response.data.resultCode === 0){
      dispatch(setStatus(status));}
    });
  };
};

export default profileReducer;
