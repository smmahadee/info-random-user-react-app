import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from '../reducers/userInfoSlice';

const store = configureStore({
  reducer: {
    getUserData: userInfoReducer,
  },
});

export default store;
