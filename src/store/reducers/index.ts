import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { userReducer } from './userReduscer';

export const rootReducer = combineReducers( {
  users: usersReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>