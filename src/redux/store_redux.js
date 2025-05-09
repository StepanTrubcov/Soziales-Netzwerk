import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile_reducer';
import dialogReducer from './Dialogs_reducer';
import userReducer from './users_reducer'


const store = configureStore({
    reducer: {
        message:dialogReducer,
        profile:profileReducer,
        users:userReducer,
    },
  });

  export default store