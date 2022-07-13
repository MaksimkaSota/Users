import React, { useEffect, useState } from 'react';
import UserCards from '../Components/Users/UserCards';
import Spinner from '../Components/spinner/spinner';
import AddUser from '../Components/Users/AddUser';
import { useSearch } from '../Hooks/useSearch';
import SearchUser from '../Components/Users/SearchUser';
import { useTypedSelector } from '../Hooks/useTypeSelector';
import { useActions } from '../Hooks/useActions';

const Users = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [search, setSearch] = useState('');

  const { getUsers, deleteUser, addUser } = useActions();
  useEffect(() => {
    getUsers();
  }, []);

  const { users } = useTypedSelector((state) => state.users);
  const searchedUsers = useSearch(users, search);

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-2">Users</h1>
        <SearchUser setSearch={setSearch} />
        <button className="buttonGetUsers mb-3" onClick={() => setShowUserForm(!showUserForm)}>
          Add user
        </button>
        {showUserForm && <AddUser addUser={addUser} />}
      </div>
      {users.length ? <UserCards users={searchedUsers} deleteUser={deleteUser} /> : <Spinner />}
    </>
  );
};

export default Users;
