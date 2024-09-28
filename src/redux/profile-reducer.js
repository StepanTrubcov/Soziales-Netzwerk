import { userAPI,HeaderAPI } from "../Api/api";

const ADD_POST = "profile/ADD-POST";
const UPDATTE_NEW_POST_TEXT = "profile/UPDATTE-NEW-POST-TEXT";
const UPDATTE_NEW_POST_IMG = "profile/UPDATTE-NEW-POST-IMG";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SET_ID = 'profile/SET_ID'
const SET_IMG = 'profile/SET_IMG'
const SET_INF = 'profile/SET_INF'
// const SET_FORM = 'profile/SET_FORM'

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
  id:null,
  status:'',
  img:null,
  profileUsers: null,
  profile:null,
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
      return { ...state, profileUsers: action.profile };
      case SET_STATUS:
      return { ...state, status: action.status };
      case SET_ID:
        return { ...state, id: action.id};
        case SET_IMG:
          return{...state, img:action.photos }
          case SET_INF:
            return{...state, profile:action.profileInf}
            // case SET_FORM:
            //   return{...state,profileForm:action.form}
    default:
      return state;
  }
};

export const newTextActionCreator = (newText) => ({
  type: UPDATTE_NEW_POST_TEXT,
  newText: newText,
});

export const newImgAva = (photos) => ({
  type: SET_IMG,
  photos,
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
export const setInf = (profileInf) => ({
  type: SET_INF,
  profileInf: profileInf,
});
export const addPostActionCreator = (text, img) => ({
  type: ADD_POST,
  text: text,
  img: img,
});


export const getProfileUsers = (userId) => async (dispatch) => {
   let response = await userAPI.getUsersProfile(userId);
      if(userId === 31497){
        dispatch(setInf(response))
      }
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

export const savePhoto = (file) => async (dispatch) => {
  let response = await userAPI.savePhotos(file);
 if(response.data.resultCode === 0){
  dispatch(newImgAva(response.data.data.photos.small));
}
};

export const newImg = (userId) => async (dispatch) => {
  let response = await userAPI.getUsersProfile(userId);
    dispatch(newImgAva(response.photos.small));

 };

 export const saveProfile = (profile) => async (dispatch,getState) => {
 let id = getState().auth.id
  let response = await userAPI.saveProfile(profile);
  if(response.data.resultCode === 0){
    dispatch(getProfileUsers(id))
  }
 };

export default profileReducer;
