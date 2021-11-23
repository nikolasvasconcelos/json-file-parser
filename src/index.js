import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import App from './components/App';
import { AppProvider } from './contexts/App';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
