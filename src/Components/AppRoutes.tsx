import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../Pages/Users';
import Posts from '../Pages/Posts';
import User from '../Pages/User';
import Context from '../Context/context';

const AppRoutes = () => {
  const { isAuth } = useContext(Context);
  return (
    isAuth
      ?
      <Routes>
        <Route path='*' element={<Users />} />
        <Route path='users' element={<Users />} />
        <Route path='/:id' element={<User />} /> {/* для корректной работы на GitPages из-за HashRouter */}
        <Route path='users/:id' element={<User />} /> {/* для корректной работы на localhost */}
        <Route path='posts' element={<Posts />} />
      </Routes>
      :
      <Routes>
        <Route path='*' element={<Posts />} />
        <Route path='posts' element={<Posts />} />
      </Routes>
  );
};

export default AppRoutes;