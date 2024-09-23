import { userAPI,HeaderAPI } from "../Api/api";

const ADD_POST = "profile/ADD-POST";
const UPDATTE_NEW_POST_TEXT = "profile/UPDATTE-NEW-POST-TEXT";
const UPDATTE_NEW_POST_IMG = "profile/UPDATTE-NEW-POST-IMG";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SET_ID = 'profile/SET_ID'

let initialState = {
  postData: [
    {
      message: "Hi, how are you?",
      like: 356,
      bild: "https://avatars.mds.yandex.net/i?id=b66d0b6e6f13afab13e2272dfcabfcb4b3f84855-4231950-images-thumbs&n=13",
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
    img: "https://avatars.githubusercontent.com/u/147098611?v=4",
  },
  id:null,
  status:'',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        bild: action.img,
        message: action.text,
        like: 0,
      };
      let stateCopy0 = { ...state };
      stateCopy0.postData = [...state.postData];
      stateCopy0.postData.unshift(newPost);
      return stateCopy0;
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
      case SET_STATUS:
      return { ...state, status: action.status };
      case SET_ID:
        return { ...state, id: action.id};
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

export const setId = (id) => ({
  type: SET_ID,
  id: id,
});

export const newImgActionCreator = (newImg) => ({
  type: UPDATTE_NEW_POST_IMG,
  newImg: newImg,
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


export const getProfileUsers = (userId) => async (dispatch) => {
   let response = await userAPI.getUsersProfile(userId);
      dispatch(setUserProfile(response));
  };


export const getStatus = (userId) => async (dispatch) => {
   let response = await userAPI.getStatus(userId);
      dispatch(setStatus(response.data));
};

export const getUpdeteStatus = (status) => async (dispatch) => {
   let response = await userAPI.updeteStatus(status);
      if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
};

export default profileReducer;
