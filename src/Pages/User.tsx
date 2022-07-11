import React, { useEffect } from 'react';
import UserCard from '../Components/User/UserCard';
import { useTypedSelector } from '../Hooks/useTypeSelector';
import { useActions } from '../Hooks/useActions';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams()
  const { user } = useTypedSelector(state => state.user)

  const { getUser } = useActions();

  useEffect(() => {
    getUser(id);
  }, []);

  return (
    <UserCard user={user}/>
  );
};

export default User;