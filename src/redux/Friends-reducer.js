const SET_USERS = "friends/SET_USERS";
const SET_FRIENDS = 'SET_FRIENDS'


let initialState = {
  FriendsData: [],
  currentPage:100,
  pageSize:4,
};

const FriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export default FriendsReducer;
