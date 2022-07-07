import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Context from '../Context/context';
import Modal from './Modal/Modal';


function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
    }
  });

  const  [openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider value ={{isAuth, setIsAuth, setOpenModal}}>
      <HashRouter>
        <div className="App">
          <NavBar  setOpenModal={() => setOpenModal(true)}/>
          <Modal openModal={openModal} setOpenModal={() => setOpenModal(false)}/>
          <AppRoutes/>
        </div>
      </HashRouter>
    </Context.Provider>
  );
}

export default App;
