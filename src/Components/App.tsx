import React, { useState } from 'react';
import './App.css';
import ButtonState from './Buttons/ButtonState/ButtonState';
import ButtonProps from './Buttons/ButtonProps/ButtonProps';
import NavBar from './NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  const [text, setText] = useState('text for props Button');
  return (
    <BrowserRouter>
      <div className="App">
        {/*<ButtonState/>*/}
        {/*<ButtonProps color="black" setText={setText}>{text}</ButtonProps>*/}
        <NavBar/>
        <AppRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
