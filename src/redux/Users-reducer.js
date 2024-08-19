import { userAPI } from "../Api/api";

const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_FENTCHING = "IS_FENTCHING";
const TOGGLE_IS_FOLLOWING_iN_PRORESS = "TOGGLE_IS_FOLLOWING_iN_PRORESS";

let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 9,
  isFentching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOWED:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
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

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFentching(true));

    userAPI.getUsers0(currentPage, pageSize).then((response) => {
      dispatch(setIsFentching(false));
      dispatch(setUsers(response.items));
      let totalCount = (response.totalCount = Math.max(100));
      dispatch(setTotalUsersCount(totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    userAPI.getUnFollow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    userAPI.getFollow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
