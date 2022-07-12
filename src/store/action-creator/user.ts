import { Dispatch } from 'redux';
import { UserActionType, UserAction } from '../types/user';
import http from '../../http';

export const getUser = (id?: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await http.get(`users/${id}`);
    dispatch({ type: UserActionType.GET_USER, payload: response.data });
  };
};
