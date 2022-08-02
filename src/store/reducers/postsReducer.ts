import { PostsAction, PostsActionType, PostsState } from '../types/posts';

const initialState: PostsState = {
  posts: [],
};

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionType.GET_POSTS:
      return { posts: action.payload };
    case PostsActionType.DELETE_POST:
      return { posts: state.posts.filter((post) => post.id !== action.payload) };
    case PostsActionType.UPDATE_POST:
      return { posts: state.posts.map((post) => (action.payload.id == post.id ? action.payload.data : post)) };
    default:
      return state;
  }
};
