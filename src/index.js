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

/* Buy Me a Coffee widget (ensures badge after SPA build/deploy) */
;(function () {
  if (typeof document === 'undefined') return
  if (document.querySelector('script[data-name="BMC-Widget"]')) return
  var s = document.createElement('script')
  s.setAttribute('data-name', 'BMC-Widget')
  s.setAttribute('data-cfasync', 'false')
  s.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
  s.setAttribute('data-id', 'vieira')
  s.setAttribute('data-description', 'Support me on Buy me a coffee!')
  s.setAttribute('data-message', '')
  s.setAttribute('data-color', '#E50914')
  s.setAttribute('data-position', 'Right')
  s.setAttribute('data-x_margin', '18')
  s.setAttribute('data-y_margin', '18')
  document.body.appendChild(s)
})()
