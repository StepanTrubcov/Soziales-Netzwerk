import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile_reducer';
import dialogReducer from './Dialogs_reducer';
import userReducer from './users_reducer';
import authReducer from './auth_reducer';
import subscriptionsReducer from './subscriptions_reducer';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app_reducer';

const store = configureStore({
  reducer: {
    message: dialogReducer,
    profile: profileReducer,
    users: userReducer,
    auth: authReducer,
    subscriptions: subscriptionsReducer,
    form: formReducer,
    app:appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});


window.store = store;

export default store;