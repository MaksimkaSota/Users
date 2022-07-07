import { createContext, Dispatch, SetStateAction } from 'react';
import { IAuth } from './IAuth';

// take out
interface IModal {
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Context = createContext({} as IAuth & IModal);

export default Context;

// Dispatch<SetStateAction<boolean>>