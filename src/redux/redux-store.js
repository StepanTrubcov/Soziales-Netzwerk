import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import FriendsReducer from "./Friends-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import appReducer from './app-reduser'
import thunkMiddileware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  FriendsPage: FriendsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddileware)), applyMiddleware(thunkMiddileware));

window._store_ = store;

export default store;
