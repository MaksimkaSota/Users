import React, { useEffect } from 'react';
import PostCards from '../Components/Posts/PostCards';
import Spinner from '../Components/spinner/spinner';
import { useActions } from '../Hooks/useActions';
import { useTypedSelector } from '../Hooks/useTypeSelector';

const Posts = () => {
  const { posts } = useTypedSelector((state) => state.posts);
  const { getPosts, deletePost, updatePost } = useActions();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h1 className="mb-2">Posts</h1>
      </div>
      {posts.length ? <PostCards deletePost={deletePost} posts={posts} updatePost={updatePost} /> : <Spinner />}
    </div>
  );
};

export default Posts;
