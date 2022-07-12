import React, { Dispatch, SetStateAction } from 'react';

const SearchUser = ({ setSearch }: { setSearch: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        Search
      </span>
      <input className="form-control" onChange={(event) => setSearch(event.target.value)} placeholder="Name" type="text" />
    </div>
  );
};

export default SearchUser;
