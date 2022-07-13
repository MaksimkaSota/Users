import { Dispatch } from 'redux';
import { UserAction, UserActionType } from '../types/user';
import http from '../../http';

export const getUser = (id?: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await http.get(`users/${id}`);
    dispatch({ type: UserActionType.GET_USER, payload: response.data });
  };
};

export const updateUser = (id?: number) => {
  const data = {
    name: 'Max',
    username: 'Maximus',
    email: 'Maximus@gmail.com',
    phone: '+375297777777',
    website: 'mister-max.com',
  };
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await http.put(`users/${id}`, data);
    dispatch({ type: UserActionType.UPDATE_USER, payload: response.data });
  };
};
