import { usersAPI } from "../Api/Api";
import { updateObjectinArray } from "../utils/object-helpers";

const SET_USERS = 'users/SET_USERS'
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const CORRENT_PAGE = 'users/CORRENT_PAGE'
const TOTAL_COUNT = 'users/TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'users/FOLLOWING_IN_PROGRESS'

const intitialState = {
  users: [],
  totalCount: null,
  pageSize: 18,
  correntPage: 1,
  IsFetching: true,
  followingInProgress: [],
}

const userReducer = (state = intitialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectinArray(state.users, action.userId, "id", { followed: true })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectinArray(state.users, action.userId, "id", { followed: false })
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case CORRENT_PAGE:
      return { ...state, correntPage: action.number }
    case TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, IsFetching: action.IsFetching }
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.IsFetching ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter(id => id != action.userId)]
      }
    default:
      return state;
  }
}

export const followAC = (userId) => ({
  type: FOLLOW,
  userId: userId,
})

export const UnFollowAC = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
})

const setUsers = (users) => ({
  type: SET_USERS,
  users: users
})

const setCorrentPage = (number) => ({
  type: CORRENT_PAGE,
  number: number
})

const setTotalCount = (totalCount) => ({
  type: TOTAL_COUNT,
  totalCount: totalCount
})

const toggleIsFetching = (IsFetching) => ({
  type: TOGGLE_IS_FETCHING,
  IsFetching: IsFetching,
})

export const toggleFollowingInProgress = (IsFetching, userid) => ({
  type: FOLLOWING_IN_PROGRESS,
  IsFetching: IsFetching,
  userid: userid,
})



export const getUsersCreator = (correntPage, pageSize) => async (dispatch) => {
  dispatch(setCorrentPage(correntPage))
  dispatch(toggleIsFetching(true))
  let response = await usersAPI.getUsers(correntPage, pageSize)
  dispatch(setTotalCount(response.totalCount))
  dispatch(setUsers(response.items))
  dispatch(toggleIsFetching(false))

}

const followUnFollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleFollowingInProgress(true, id))
  let data = await apiMethod
  if (data.resultCode === 0) {
    dispatch(actionCreator)
  }
  dispatch(toggleFollowingInProgress(false, id))
}

export const getUnFollowed = (id) => async (dispatch) => {
  followUnFollowFlow(dispatch, id, usersAPI.getUnFollow(id), followAC(id))
}

export const getFollowed = (id) => async (dispatch) => {
  followUnFollowFlow(dispatch, id, usersAPI.getFollow(id), UnFollowAC(id))
}

export default userReducer;