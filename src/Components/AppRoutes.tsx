import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../Pages/Users';
import Posts from '../Pages/Posts';
import User from '../Pages/User';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='*' element={<Users/>} />
      <Route path='users' element={<Users/>} />
      <Route path='users/:id' element={<User/>} />
      <Route path='posts' element={<Posts/>} />
    </Routes>
  );
};

export default AppRoutes;