import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IUser } from './IUser';
import { initialValue } from './InitialValue';

const AddUser = ({ addUser }: { addUser(event: FormEvent<HTMLFormElement>, value: IUser): void }) => {
  const [value, setValue] = useState<IUser>(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setValue({ ...value, [field]: event.target.value });
  };

  return (
    <form
      className="col-4 m-auto mb-3 form-add-users"
      onSubmit={(event) => {
        addUser(event, value);
        setValue(initialValue);
      }}
    >
      {Object.keys(initialValue).map((field) => (
        <div className="mb-3 input-group-text" key={field}>
          <label htmlFor={field} className="form-label mb-0">
            {field}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={`Input user ${field}`}
            id={field}
            value={value[field as keyof Omit<IUser, 'id' | 'address' | 'company'>]}
            onChange={(event) => onChange(event)}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-outline-secondary">
        Save
      </button>
    </form>
  );
};

export default AddUser;
