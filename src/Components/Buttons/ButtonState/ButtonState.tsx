import React, { useState } from 'react';
import './ButtonsState.css';

const ButtonState = () => {
  const [text, setText] = useState('Click me!');

  return (
    <button className="primary" onClick = {() => setText('Thank me me me!') }>{text}</button>
  );
};

export default ButtonState;