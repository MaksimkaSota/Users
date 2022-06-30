import React, { useEffect, useState } from 'react';
import { IUser } from '../Users/IUser';
import { useParams } from 'react-router-dom';
import http from '../../http';

const UserCard = () => {

  const initialValue: IUser = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  }

  const [user, setUser] = useState<IUser>(initialValue);
  const {id} = useParams();

  const  getUsers = () => {
    http.get(`users/${id}`).then(res => {
      setUser(res.data);
    })
  }

  useEffect(() => {
    getUsers();
  }, []);

  const updateUser = (id?: number) => {
    const data = {
      name: 'Max',
      username: 'Maximus',
      email: 'Maximus@gmail.com',
      phone: '+375297777777',
      website: 'mister-max.com'
    }
    http.put(`users/${id}`, data).then(res => {
      setUser(data);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="col-4 row-3 m-auto mt-3">
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
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
              <button className="buttonDeleteUser" onClick={() => updateUser(user.id)}>Update user</button>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;