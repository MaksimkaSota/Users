import React, { useState } from 'react';
import './App.css';
import ButtonState from './Buttons/ButtonState/ButtonState';
import ButtonProps from './Buttons/ButtonProps/ButtonProps';
import Counter from './Buttons/Counter/Counter';
import UserCards from './Users/UserCards';

function App() {
  const [text, setText] = useState('text for props Button');
  return (
    <div className="App">
      {/*<h1>I am React Application</h1>*/}
      {/*<Counter/>*/}
      {/*<ButtonState/>*/}
      {/*<ButtonProps color="black" setText={setText}>{text}</ButtonProps>*/}
      <UserCards/>
    </div>
  );
}

export default App;
