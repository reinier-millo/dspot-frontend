/**
 * Redux store to keep the state of the application.
 */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import friendsReducer from './friendsSlice';
import layoutReducer from './layoutSlice';

const store = configureStore({
  reducer: combineReducers({
    friends: friendsReducer,
    layout: layoutReducer,
  }),
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
