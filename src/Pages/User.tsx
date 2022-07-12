import React, { useEffect } from 'react';
import UserCard from '../Components/User/UserCard';
import { useTypedSelector } from '../Hooks/useTypeSelector';
import { useActions } from '../Hooks/useActions';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import http from '../http';
import { UserActionType } from '../store/types/user';

const User = () => {
  const { id } = useParams();
  const { user } = useTypedSelector((state) => state.user);
  const { getUser } = useActions();

  useEffect(() => {
    getUser(id);
  }, []);

  const dispatch = useDispatch();
  const updateUser = (id?: number) => {
    const data = {
      name: 'Max',
      username: 'Maximus',
      email: 'Maximus@gmail.com',
      phone: '+375297777777',
      website: 'mister-max.com',
    };
    http.put(`users/${id}`, data).then((res) => {
      dispatch({ type: UserActionType.UPDATE_USER, payload: res.data });
    });
  };

  return <UserCard user={user} updateUser={updateUser} />;
};

export default User;
