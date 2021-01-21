import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WeatherContextWrapper } from './Component/JSFiles/WeatherContext';

ReactDOM.render(
  <React.StrictMode>
    <WeatherContextWrapper>
      <App />
    </WeatherContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

