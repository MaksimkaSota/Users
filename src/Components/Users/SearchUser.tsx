import React, { Dispatch, SetStateAction } from 'react';
import { IUser } from './IUser';

const SearchUser = ({ setSearch } : { setSearch: Dispatch<SetStateAction<string>>}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Search</span>
      <input type="text"
             className="form-control"
             placeholder="Name"
             onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchUser;