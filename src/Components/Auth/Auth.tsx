import React, { FormEvent, useContext, useState } from 'react';
import http from '../../http';
import Context from '../../Context/context';

const Auth = () => {
  // username: 'mor_2314', password: '83r5^_' Подставлены сразу, что бы сократить время на проверку работы приложения
  const [userName, setUserName] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');

  const loginData = {
    username: userName,
    password: password,
  };

  const getUserName = (value: string) => {
    setUserName(value);
  };
  const getPassword = (value: string) => {
    setPassword(value);
  };

  const { setIsAuth, setOpenModal } = useContext(Context);

  const JSON_URL = 'https://fakestoreapi.com/auth/login';
  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post(JSON_URL, loginData).then((res) => {
      localStorage.setItem('token', res.data.token);
      setIsAuth(true);
      setOpenModal(false);
    });
  };

  return (
    <form onSubmit={(event) => login(event)}>
      <div className="mb-3">
        <label className="form-label" htmlFor="exampleInputEmail1">
          Username
        </label>
        <input
          className="form-control m-auto"
          id="exampleInputEmail1"
          onChange={(event) => getUserName(event.target.value)}
          type="text"
          value={userName}
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label" htmlFor="exampleInputPassword1">
          Password
        </label>
        <input
          className="form-control m-auto"
          id="exampleInputPassword1"
          onChange={(event) => getPassword(event.target.value)}
          type="password"
          value={password}
        />
      </div>
      <button className="btn btn-secondary" type="submit">
        Login
      </button>
    </form>
  );
};

export default Auth;
