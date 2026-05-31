import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { VieiraAnalytics } from '@vieira/analytics/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <VieiraAnalytics projectKey='netflix-clone' />
  </React.StrictMode>
);
