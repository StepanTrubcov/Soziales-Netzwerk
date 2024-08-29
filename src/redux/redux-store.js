import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import FriendsReducer from "./Friends-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import {thunk as thunkMiddileware} from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  FriendsPage: FriendsReducer,
  sidebar: sidebarReducer,
  usersPage:usersReducer,
  auth:authReducer,
  form:formReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddileware));

window.store = store;

export default store;
