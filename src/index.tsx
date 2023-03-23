import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Intro'
import TeamList from './Teams'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Intro />
    <TeamList />
  </React.StrictMode>
);

reportWebVitals();
