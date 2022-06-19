import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [num, setNum] = useState<number>(0);

  return (
    <div className="container">
      <div>
        <span>{num}</span>
      </div>
      <div>
        <button className="clicker" onClick = {() => setNum(num-1) }>-</button>
        <button onClick = {() => setNum(0) }>Set to Null</button>
        <button onClick = {() => setNum(num+1) }>+</button>
      </div>
    </div>
  );
};

export default Counter;