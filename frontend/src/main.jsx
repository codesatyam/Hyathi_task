// Import necessary dependencies
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createContext } from "react";

// Set the server URL
export const server = "http://localhost:4000";

// Create a context
export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  // State variables
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logU, setlogU] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [countUser, setCountUser] = useState(0);
  const [urlPok, setUrlPok] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [preUrl, setPreUrl] = useState();
  const [pokData, setPokemonData] = useState([]);
  const [mypokemons, setMyPokemons] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
        urlPok,
        setUrlPok,
        nextUrl,
        setNextUrl,
        preUrl,
        setPreUrl,
        pokData,
        setPokemonData,
        mypokemons,
        setMyPokemons,
        refresh,
        setRefresh
      }}
    >
      <App />
    </Context.Provider>
  );
};

// Render the AppWrapper component to the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
