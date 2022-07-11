import { Dispatch } from 'redux';
import { UserActionType, UsersAction } from '../types/users';
import http from '../../http';

export const getUser = (id?: string) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.get(`users/${id}`);
    dispatch({ type: UserActionType.GET_USER, payload: response.data })
  }
}