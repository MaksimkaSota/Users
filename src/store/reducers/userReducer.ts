import { UserAction, UserActionType, UserState } from '../types/user';

const initialState: UserState = {
  user: {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  },
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.GET_USER:
      return { user: action.payload };
    case UserActionType.UPDATE_USER:
      return { user: action.payload };
    default:
      return state;
  }
};
