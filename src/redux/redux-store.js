import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import FriendsReducer from "./Friends-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import {thunk as thunkMiddileware} from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  FriendsPage: FriendsReducer,
  sidebar: sidebarReducer,
  usersPage:usersReducer,
  auth:authReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddileware));

window.store = store;

export default store;
