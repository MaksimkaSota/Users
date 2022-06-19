import React from 'react';
import { USERS } from './users';
import './UserCards.css'
import ButtonGetUsers from '../Buttons/ButtonGetUsers/ButtonGetUsers';
import ButtonEditUser from '../Buttons/ButtonEditUser/ButtonEditUser';
import ButtonDeleteUser from '../Buttons/ButtonDeleteUser/ButtonDeleteUser';

const UserCards = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-2">Users</h1>
      <ButtonGetUsers/>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {USERS.map(user =>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text"><span className="title">Username:</span> {user.username}</p>
                <p className="card-text"><span className="title">Address:</span> {user.address.city}, {user.address.street}, {user.address.suite}</p>
                <p className="card-text"><span className="title">Phone:</span> {user.phone}</p>
                <p className="card-text"><span className="title">Email:</span> {user.email}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted"><ButtonEditUser/> <ButtonDeleteUser/></small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCards;