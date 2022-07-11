import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../Pages/Users';
import Posts from '../Pages/Posts';
import User from '../Pages/User';
import Context from '../Context/context';

const AppRoutes = () => {
  const { isAuth } = useContext(Context);
  return isAuth ? (
    <Routes>
      <Route element={<Users />} path="*" />
      <Route element={<Users />} path="users" />
      <Route element={<User />} path="users/:id" />
      <Route element={<Posts />} path="posts" />
    </Routes>
  ) : (
    <Routes>
      <Route element={<Posts />} path="*" />
      <Route element={<Posts />} path="posts" />
    </Routes>
  );
};

export default AppRoutes;
