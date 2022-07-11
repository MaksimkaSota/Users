import { UserActionType, UsersAction, UserState } from '../types/users';

const initialState: UserState = {
  user: {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  }
}

export const userReducer = (state = initialState, action: UsersAction): UserState => {
  switch (action.type) {
    case UserActionType.GET_USER: return {user:action.payload};
    default: return state
  }
};