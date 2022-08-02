import { IPost } from '../../Components/Posts/IPost';

export interface PostsState {
  posts: IPost[];
}

export enum PostsActionType {
  GET_POSTS = 'GET_POSTS',
  DELETE_POST = 'DELETE_POST',
  UPDATE_POST = 'UPDATE_POST',
}

interface GetPostsAction {
  type: PostsActionType.GET_POSTS;
  payload: IPost[];
}

interface DeletePostAction {
  type: PostsActionType.DELETE_POST;
  payload: number;
}

interface UpdatePostAction {
  type: PostsActionType.UPDATE_POST;
  payload: { id: number; data: IPost };
}

export type PostsAction = GetPostsAction | DeletePostAction | UpdatePostAction;
