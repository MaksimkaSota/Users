import http from '../../http';
import { Dispatch } from 'redux';
import { PostsAction, PostsActionType } from '../types/posts';

export const getPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    const response = await http.get('posts');
    dispatch({ type: PostsActionType.GET_POSTS, payload: response.data });
  };
};

export const deletePost = (id: number) => {
  const isDelete = confirm('Delete this post?');
  if (isDelete) {
    return async (dispatch: Dispatch<PostsAction>) => {
      const response = await http.delete(`posts/${id}`);
      dispatch({ type: PostsActionType.DELETE_POST, payload: id });
    };
  }
};

export const updatePost = (id: number) => {
  const data = {
    userId: 0,
    id: 0,
    title: 'My favorite post ',
    body: 'Once more into the fray... Into the last good fight i will ever know. Live and die on this day... Live and die on this day...',
  };
  return async (dispatch: Dispatch<PostsAction>) => {
    const response = await http.put(`posts/${id}`, data);
    dispatch({ type: PostsActionType.UPDATE_POST, payload: { id, data } });
  };
};
