import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { userReducer } from './userReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
