import { profileAPI } from "../Api/Api"

const ADD_POST = 'propfile/ADD_POST'
const ADD_INFO = 'propfile/ADD_INFO'
const SET_PROFILE = 'propfile/SET_PROFILE'
const NEW_POST_WINDOW = 'propfile/NEW_POST_WINDOW'
const EDIT_PROFILE_WINDOW = 'propfile/EDIT_PROFILE_WINDOW'
const ADD_STATUS = 'propfile/ADD_STATUS'

const myPostStore = {
  postData: [
    {
      img: 'https://i.pinimg.com/736x/9e/f5/6c/9ef56ceaf17835834e931cff934b2acc.jpg',
      text: 'This is your first post!',
    },
  ],
  profile: null,
  newPostWindow: false,
  EditProfileWindow: true,
  status: null,
}

const profileReducer = (state = myPostStore, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        img: action.img,
        text: action.text,
      };
      let stateCopy0 = { ...state };
      stateCopy0.postData = [...state.postData];
      stateCopy0.postData.unshift(newPost);
      return stateCopy0;
    case ADD_INFO:
      let stateCopy1 = { ...state };
      stateCopy1.ava = action.ava
      stateCopy1.name = action.name
      stateCopy1.years = action.years
      return stateCopy1;
    case SET_PROFILE:
      return { ...state, profile: action.profile }
    case NEW_POST_WINDOW:
      return { ...state, newPostWindow: action.newPostWindow }
    case EDIT_PROFILE_WINDOW:
      return { ...state, EditProfileWindow: action.EditProfileWindow }
    case ADD_STATUS:
      return { ...state, status: action.status }
    default:
      return state;
  }
}

export const addStatus = (status) => ({
  type: ADD_STATUS,
  status: status
});

export const addPostActionCreator = (text, img) => ({
  type: ADD_POST,
  text: text,
  img: img,
});

export const addInfoActionCreator = (name, ava, years) => ({
  type: ADD_INFO,
  ava: ava,
  name: name,
  years: years,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile: profile,
});

export const setNewPostWindow = (newPostWindow) => ({
  type: NEW_POST_WINDOW,
  newPostWindow: newPostWindow,
});

export const setEditProfileWindow = (EditProfileWindow) => ({
  type: EDIT_PROFILE_WINDOW,
  EditProfileWindow: EditProfileWindow,
});



export const getProfile = (profileId) => async (dispatch) => {
  let response = await profileAPI.getProfileId(profileId)
  dispatch(setProfile(response))
}

export const getStatus = (profileId) => async (dispatch) => {
  let response = await profileAPI.getAboutMe(profileId)
  dispatch(addStatus(response))
}

export const NewStatus = (status) => async (dispatch) => {
 let response = await profileAPI.newStatusApi(status)
    if (response.resultCode === 0) {
      dispatch(addStatus(status))
    }
 
}

export const NewPhoto = (photo) => async (dispatch) => {
  await profileAPI.newPhotoApi(photo)
}


export default profileReducer;