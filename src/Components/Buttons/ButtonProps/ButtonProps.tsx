import React, {Dispatch, SetStateAction} from 'react';
import './ButtonProps.css';

interface ButtonProps {
  children: string;
  color: string;
  setText: Dispatch<SetStateAction<string>>;
}

const ButtonProps = ({children, color, setText}: ButtonProps) => {
  console.log(children);
  console.log(color);
  return (
    <button className={color} onClick={() => setText('Do you click me?')}>{children}</button>
  );
};

export default ButtonProps;