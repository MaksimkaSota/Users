import { UsersActionType, UsersAction, UsersState } from '../types/users';

const initialState: UsersState = {
  users: [],
};

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionType.GET_USERS:
      return { users: action.payload };
    case UsersActionType.DELETE_USER:
      return { users: action.payload };
    case UsersActionType.ADD_USER:
      return { users: action.payload };
    default:
      return state;
  }
};
