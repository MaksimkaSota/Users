import React from 'react';
import './UserCards.css';
import { IUser } from './IUser';
import Spinner from '../spinner/spinner';
import { Link } from 'react-router-dom';

const UserCards = ({ users, deleteUser }: { users: IUser[], deleteUser: (id?: number) => void }) => {

  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {
        users.length && users.map(user =>
          <div className='col' key={user.id}>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>
                  <Link to={`${user.id}`}>{user.name}</Link>
                </h5>
                <p className='card-text'>
                  <span className='title'>Username:</span> {user.username}
                </p>
                <p className='card-text'>
                  <span className='title'>Email:</span> {user.email}
                </p>
                <p className='card-text'>
                  <span className='title'>Phone:</span> {user.phone}
                </p>
                <p className='card-text'>
                  <span className='title'>Website:</span> {user.website}
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-muted'>
                  <button className='buttonDeleteUser' onClick={() => deleteUser(user.id)}>Delete user</button>
                </small>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default UserCards;

