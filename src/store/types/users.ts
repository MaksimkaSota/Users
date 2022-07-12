import { IUser } from '../../Components/Users/IUser';

export interface UsersState {
  users: IUser[];
}

export enum UsersActionType {
  GET_USERS = 'GET_USERS',
  DELETE_USER = 'DELETE_USER',
  ADD_USER = 'ADD_USER',
}

interface GetUsersAction {
  type: UsersActionType.GET_USERS;
  payload: IUser[];
}

interface DeleteUsersAction {
  type: UsersActionType.DELETE_USER;
  payload: IUser[];
}

interface AddUsersAction {
  type: UsersActionType.ADD_USER;
  payload: IUser[];
}

export type UsersAction = GetUsersAction | DeleteUsersAction | AddUsersAction;
