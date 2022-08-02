import * as UsersActionCreators from './users';
import * as UserActionCreators from './user';
import * as PostsActionCreators from './posts';

export default {
  ...UsersActionCreators,
  ...UserActionCreators,
  ...PostsActionCreators,
};
