import React, { useEffect, useState } from 'react';
import UserCards from '../Components/Users/UserCards';
import { IUser } from '../Components/Users/IUser';
import http from '../http';
import Spinner from '../Components/spinner/spinner';
import AddUser from '../Components/Users/AddUser';
import { useSearch } from '../Hooks/useSearch';
import SearchUser from '../Components/Users/SearchUser';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../Hooks/useTypeSelector';
import { useActions } from '../Hooks/useActions';
import { UsersActionType } from '../store/types/users';

const Users = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [search, setSearch] = useState('');

  const { getUsers } = useActions();
  useEffect(() => {
    getUsers();
  }, []);

  const { users } = useTypedSelector((state) => state.users);
  const searchedUsers = useSearch(users, search);

  const dispatch = useDispatch();
  const deleteUser = (id?: number) => {
    const isDelete = confirm('Delete this user?');
    if (isDelete) {
      http.delete(`users/${id}`).then((res) => {
        dispatch({ type: UsersActionType.DELETE_USER, payload: users.filter((user) => user.id !== id) });
      });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-2">Users</h1>
        <SearchUser setSearch={setSearch} />
        <button className="buttonGetUsers mb-3" onClick={() => setShowUserForm(!showUserForm)}>
          Add user
        </button>
        {showUserForm && <AddUser users={users} />}
      </div>
      {users.length ? <UserCards users={searchedUsers} deleteUser={deleteUser} /> : <Spinner />}
    </>
  );
};

export default Users;
