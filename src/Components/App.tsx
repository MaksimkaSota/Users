import React, { useEffect, useState } from 'react';
import './App.css';
import ButtonState from './Buttons/ButtonState/ButtonState';
import ButtonProps from './Buttons/ButtonProps/ButtonProps';
import NavBar from './NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <div className="App">
          {/*<ButtonState/>*/}
          {/*<ButtonProps color="black" setText={setText}>{text}</ButtonProps>*/}
          <NavBar  setOpenModal={() => setOpenModal(true)}/>
          <Modal openModal={openModal} setOpenModal={() => setOpenModal(false)}/>
          <AppRoutes/>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
