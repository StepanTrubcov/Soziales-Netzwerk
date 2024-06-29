import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from './sidebar-reducer'
import FriendsReducer from './Friends-reducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  FriendsPage: FriendsReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
