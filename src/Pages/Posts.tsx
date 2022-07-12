import React, { useEffect, useState } from 'react';
import PostCards from '../Components/Posts/PostCards';
import Spinner from '../Components/spinner/spinner';
import http from '../http';
import { IPost } from '../Components/Posts/IPost';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const deletePost = (id: number) => {
    const isDelete = confirm('Delete this post?');
    if (isDelete) {
      http
        .delete(`posts/${id}`)
        .then((res) => {
          setPosts(posts.filter((post) => post.id !== id));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updatePost = (id: number) => {
    const data = {
      userId: 0,
      id: 0,
      title: 'My favorite post ',
      body: 'Once more into the fray... Into the last good fight i will ever know. Live and die on this day... Live and die on this day...',
    };
    http
      .put(`posts/${id}`, data)
      .then((res) => {
        setPosts(posts.map((post) => (id == post.id ? res.data : post)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPosts = () => {
    http.get('posts').then((res) => {
      setPosts(res.data);
    });
  };

  // const  getPosts = async () => {
  //   const posts: {data: IPost[]} = await http.get('posts');
  //   setPosts(posts.data);
  // }

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
