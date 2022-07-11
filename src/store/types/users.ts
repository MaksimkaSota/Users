import { IUser } from '../../Components/Users/IUser';

export interface UsersState {
  users: [];
}

export interface UserState {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: IUser;
}

export enum UserActionType {
  GET_USERS = 'GET_USERS',
  GET_USER = 'GET_USER'
}

interface GetUsersAction {
  type: UserActionType.GET_USERS
  payload: [];
}

interface GetUserAction {
  type: UserActionType.GET_USER
  // eslint-disable-next-line @typescript-eslint/ban-types
  payload: IUser;
}

export type UsersAction = GetUsersAction |  GetUserAction ;

