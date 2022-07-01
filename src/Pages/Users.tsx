import React, { useEffect, useState } from 'react';
import UserCards from '../Components/Users/UserCards';
import { IUser } from '../Components/Users/IUser';
import http from '../http';
import Spinner from '../Components/spinner/spinner';
import AddUser from '../Components/Users/AddUser';
import { useSearch } from '../Hooks/useSearch';


const Users = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');

  const searchedUsers = useSearch(users, search);
  //1. take  out search component

  const deleteUser = (id?: number) => {
    const isDelete = confirm('Delete this user?');
    if (isDelete) {
      http.delete(`users/${id}`).then(res => {
        setUsers(users.filter((user) => user.id !== id ));
      }).catch(err => {
        console.log(err);
      });
    }
  }

  const  getUsers = () => {
    http.get('users').then(res => {
      setUsers(res.data);
    })
  }

  useEffect(() => {
    getUsers();
  }, []);

  // const  getUsers = async () => {
  //   const users: {data: IUser[]} = await http.get('users');
  //   setUsers(users.data);
  // }

  return (
    <div>
      <div className="container mt-5">
        <h1 className="mb-2">Users</h1>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Search</span>
          <input type="text"
                 className="form-control"
                 placeholder="Name"
                 onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <button className="buttonGetUsers mb-3" onClick={() => setShowUserForm(!showUserForm)}>Add user</button>
        { showUserForm &&  <AddUser users={users} setUsers={setUsers}/> }
      </div>
      {
        users.length
          ?
        <UserCards users={searchedUsers} deleteUser={deleteUser} />
          :
        <Spinner/>
      }
    </div>
  );
};

export default Users;