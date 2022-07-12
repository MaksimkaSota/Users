import { IUser } from '../../Components/Users/IUser';

export interface UserState {
  user: IUser;
}

export enum UserActionType {
  GET_USER = 'GET_USER',
  UPDATE_USER = 'UPDATE_USER',
}

interface GetUserAction {
  type: UserActionType.GET_USER;
  payload: IUser;
}

interface UpdateUserAction {
  type: UserActionType.UPDATE_USER;
  payload: IUser;
}

export type UserAction = GetUserAction | UpdateUserAction;
