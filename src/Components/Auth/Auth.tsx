import React, { FormEvent, useContext, useState } from 'react';
import http from '../../http'
import Context from '../../Context/context';

const Auth = () => {
  // username: 'mor_2314', password: '83r5^_' Подставлены сразу, что бы сократить время на проверку работы приложения
  const [userName, setUserName] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');

  const loginData = {
    username: userName,
    password: password
  }


  const getUserName = (value: string) => {
    setUserName(value);
  }
  const getPassword = (value: string) => {
    setPassword(value);
  }

  const { setIsAuth, setOpenModal } = useContext(Context);

  const JSON_URL = 'https://fakestoreapi.com/auth/login';
  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post(JSON_URL, loginData).then(res => {
      localStorage.setItem('token', res.data.token);
      setIsAuth(true);
      setOpenModal(false);
    })
  }

  return (
    <form onSubmit={(event) => login(event)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input type="text"
               className="form-control m-auto"
               id="exampleInputEmail1"
               onChange={(event) => getUserName(event.target.value)}
               value={userName}
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password"
               className="form-control m-auto"
               id="exampleInputPassword1"
               onChange={(event) => getPassword(event.target.value)}
               value={password}
        />
      </div>
      <button type="submit" className='btn btn-secondary'>Login</button>
    </form>
  );
};

export default Auth;