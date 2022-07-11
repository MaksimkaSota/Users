import * as UsersActionCreators from './users';
import * as UserActionCreators from './user';

export default {
  ...UsersActionCreators,
  ...UserActionCreators
}