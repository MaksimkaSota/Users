import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* eslint-disable-next-line react/jsx-no-undef */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);