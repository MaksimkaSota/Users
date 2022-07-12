import http from '../../http';
import { Dispatch } from 'redux';
import { UsersAction, UsersActionType } from '../types/users';

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.get('users');
    dispatch({ type: UsersActionType.GET_USERS, payload: response.data });
  };
};
