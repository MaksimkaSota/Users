import React from 'react';
import { IPost } from './IPost';

const PostCards = ({ posts, deletePost, updatePost }: { posts: IPost[], deletePost: (id: number) => void, updatePost: (id: number) => void }) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4 w-100 m-auto'>
      {
        posts.length && posts.map(post =>
          <div className='col' key={post.id}>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>
                  <span className='title'>{post.title}</span>
                </h5>
                <p className='card-text'>
                  <span className='text-body'>{post.body}</span>
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-muted'>
                  <button className='buttonDeleteUser' onClick={() => deletePost(post.id)}>Delete user</button>
                  <button className='buttonDeleteUser' onClick={() => updatePost(post.id)}>Update user</button>
                </small>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default PostCards;