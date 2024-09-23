import { userAPI } from "../Api/api";
import { updateObject } from "../utils/objects-helper";

const FOLLOWED = "user/FOLLOWED";
const UNFOLLOWED = "user/UNFOLLOWED";
const SET_USERS = "user/SET_USERS";
const SET_CURRENT_PAGE = "user/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "user/SET_TOTAL_USERS_COUNT";
const IS_FENTCHING = "user/IS_FENTCHING";
const TOGGLE_IS_FOLLOWING_iN_PRORESS = "user/TOGGLE_IS_FOLLOWING_iN_PRORESS";

let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 100,
  isFentching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        users: updateObject(state.users,action.userId,'id',{followed: true})};
    case UNFOLLOWED:
      return {
        ...state,
        users: updateObject(state.users,action.userId,'id',{followed: false})
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case IS_FENTCHING:
      return { ...state, isFentching: action.isFentching };
    case TOGGLE_IS_FOLLOWING_iN_PRORESS:
      return {
        ...state,
        followingInProgress: action.isFentching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOWED,
  userId,
});
export const unfollowSuccess = (userId) => ({
  type: UNFOLLOWED,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const toggleFollowingInProgress = (isFentching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_iN_PRORESS,
  isFentching,
  userId,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const setIsFentching = (isFentching) => ({
  type: IS_FENTCHING,
  isFentching,
});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFentching(true));
let response = await userAPI.getUsers0(currentPage, pageSize)
      dispatch(setIsFentching(false));
      dispatch(setUsers(response.items));
      let totalCount = (response.totalCount = Math.max(100));
      dispatch(setTotalUsersCount(totalCount));
  };

  const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
   let response = await apiMethod
      if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));

    followUnfollowFlow(dispatch,userId,userAPI.getUnFollow(userId),unfollowSuccess)
};

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followUnfollowFlow(dispatch,userId, userAPI.getFollow(userId),followSuccess)
};

export default usersReducer;
