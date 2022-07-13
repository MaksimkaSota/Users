import http from '../../http';
import { Dispatch } from 'redux';
import { UsersAction, UsersActionType } from '../types/users';
import { IUser } from '../../Components/Users/IUser';
import { FormEvent } from 'react';

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.get('users');
    dispatch({ type: UsersActionType.GET_USERS, payload: response.data });
  };
};

export const deleteUser = (id?: number) => {
  const isDelete = confirm('Delete this user?');
  if (isDelete) {
    return async (dispatch: Dispatch<UsersAction>) => {
      const response = await http.delete(`users/${id}`);
      dispatch({ type: UsersActionType.DELETE_USER, payload: id });
    };
  }
};

export const addUser = (event: FormEvent<HTMLFormElement>, value: IUser) => {
  event.preventDefault();
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.post(`users`, value);
    dispatch({ type: UsersActionType.ADD_USER, payload: response.data });
  };
};
