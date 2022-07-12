import React from 'react';
import { IUser } from '../Users/IUser';

const UserCard = ({ user, updateUser }: { user: IUser; updateUser(id?: number): void }) => {
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
              <button className="buttonDeleteUser" onClick={() => updateUser(user.id)}>
                Update user
              </button>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
