import React, { FormEvent, useContext, useState } from 'react';
import http from '../../http'
import Context from '../../Context/context';

const Auth = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginData = {
    username: userName,
    password: password
  }

  // username: 'mor_2314', password: '83r5^_'
  const getUserName = (value: string) => {
    setUserName(value);
  }
  const getPassword = (value: string) => {
    setPassword(value);
  }

  // 2. After success request change setIsAuth: true;
  const { setIsAuth } = useContext(Context);

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post('https://fakestoreapi.com/auth/login', loginData).then(res => {
      setIsAuth(true);
      console.log(res);
      console.log(res.data.token);
    }).catch(err => {
      setIsAuth(false);
      console.log(err);
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
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password"
               className="form-control m-auto"
               id="exampleInputPassword1"
               onChange={(event) => getPassword(event.target.value)}
        />
      </div>
      <button type="submit" className='btn btn-primary'>Login</button>
    </form>

  );
};

export default Auth;