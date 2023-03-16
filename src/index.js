import React from 'react';
import ReactDOM from 'react-dom/client';
// import Bootstrap for all components
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the Jost font from Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap';
document.head.appendChild(link);

// Import the Font Awesome icons
const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/54f6f07b9b.js';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();