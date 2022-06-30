import React, { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import './UserCards.css';
import { USERS } from './users';
import { IUser } from './IUser';
import http from '../../http';
import Spinner from '../spinner/spinner';
import { Link } from 'react-router-dom';

const initialValue: IUser = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: ''
}

const UserCards = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [value, setValue] = useState<IUser>(initialValue);
  const [search, setSearch] = useState('');

  const searchedUser = useMemo(() => {
    if (search) {
      return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    }
    return users;
  }, [search, users]);

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

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setValue({...value, [field]: event.target.value});
  }

  const addUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post('users', value).then(res => {
      setUsers ([...users, res.data]);
      setValue(initialValue);
    }).catch(err => {
      console.log(err);
    });
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
      {/*<button className="buttonGetUsers mb-3 mx-3" onClick={() => getUsers()}>Fetch user</button>*/}
      <button className="buttonGetUsers mb-3" onClick={() => setShowUserForm(!showUserForm)}>Add user</button>
      {
        showUserForm &&
        <form className="col-4 m-auto mb-3 form-add-users" onSubmit={(event) => addUser(event) }>
          {Object.keys(initialValue).map(field =>
              <div className="mb-3 input-group-text" key={field}>
                <label htmlFor={field} className="form-label mb-0">{field}</label>
                <input type="text"
                       className="form-control"
                       placeholder={`Input user ${field}`}
                       id={field}
                       value={value[field as keyof Omit <IUser, 'id' | 'address' | 'company'>]}
                       onChange={(event) => onChange(event)}
                />
              </div>
          )}
          <button type="submit" className="btn btn-outline-secondary">Save</button>
        </form>
      }
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          users.length
            ?
            searchedUser.map(user =>
              <div className="col" key={user.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`${user.id}`}>{user.name}</Link>
                    </h5>
                    <p className="card-text">
                      <span className="title">Username:</span> {user.username}
                    </p>
                    <p className="card-text">
                      <span className="title">Email:</span> {user.email}
                    </p>
                    <p className="card-text">
                      <span className="title">Phone:</span> {user.phone}
                    </p>
                    <p className="card-text">
                      <span className="title">Website:</span> {user.website}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      <button className="buttonDeleteUser" onClick={() => deleteUser(user.id)}>Delete user</button>
                    </small>
                  </div>
                </div>
              </div>)
            :
            <Spinner/>
        }
      </div>
    </div>
  );
};

export default UserCards;

