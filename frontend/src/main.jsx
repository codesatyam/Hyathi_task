import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createContext } from "react";

// Create a context
export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  // State variables
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logU, setlogU] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [countUser, setCountUser] = useState(0);

  return (
    // Provide the context values to the App component
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
        logU,
        setlogU,
        countUser,
        setCountUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
