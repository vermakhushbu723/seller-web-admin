import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './core/context/AuthContext.jsx';
import { router } from './core/utils/router.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
