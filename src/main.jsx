 


import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { dataLoaded } from './data/index';
import './global.css';
import App from './App.jsx'



  const root = createRoot(document.getElementById('root'))
// Create a loading indicator
const renderLoading = () => {;
  root.render(
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading website data...</p>
      </div>
    </div>
  );
};

// First render a loading state
renderLoading();

// Wait for data to be loaded before rendering the app
dataLoaded.then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});