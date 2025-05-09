
const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const CORRENT_PAGE = 'CORRENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'

const intitialState = {
  users: [],
  totalCount:57,
  pageSize:5,
  correntPage:1,
}

const userReducer = (state = intitialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, follow: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, follow: false }
          }
          return u;
        })
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case CORRENT_PAGE:
      return {...state , correntPage: action.number}
      case TOTAL_COUNT:
        return {...state , totalCount:action.totalCount}
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

export const setUsers = (users) => ({
  type: SET_USERS,
  users: users
})

export const setCorrentPage = (number) => ({
  type: CORRENT_PAGE,
  number: number
})

export const setTotalCount = (totalCount) => ({
  type: TOTAL_COUNT,
  totalCount: totalCount
})

export default userReducer;