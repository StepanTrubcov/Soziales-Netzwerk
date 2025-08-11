import { usersAPI } from "../Api/Api";

const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const CORRENT_PAGE = 'CORRENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

const intitialState = {
  users: [],
  totalCount: 180,
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
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
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

export const setTotalCount = (totalCount) => ({
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



export const getUsersCreator = (correntPage, pageSize) => (dispatch) => {
  dispatch(setCorrentPage(correntPage))
  dispatch(toggleIsFetching(true))
  usersAPI.getUsers(correntPage, pageSize).then(response => {
    dispatch(setUsers(response.items))
    dispatch(toggleIsFetching(false))
  })
}

export const getUnFollowed = (id) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, id))
  usersAPI.getUnFollow(id).then(data => {
    if (data.resultCode === 0) {
      dispatch(followAC(id))
    }
    dispatch(toggleFollowingInProgress(false, id))
  })
}

export const getFollowed = (id) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, id))
  usersAPI.getFollow(id).then(data => {
    if (data.resultCode === 0) {
      dispatch(UnFollowAC(id))
    }
    dispatch(toggleFollowingInProgress(false, id))
  })
}

export default userReducer;