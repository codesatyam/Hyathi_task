import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/User/Login';
import Register from './component/User/Register';
import { Toaster } from 'react-hot-toast';
import { Context } from './main';
import axios from 'axios';
import PokemonAllCards from './component/PokemonAllCards';
import Help from './component/Help';
import Profile from './component/User/Profile';
import Adopt from './component/Adopt';
import MyPokemon from './component/MyPokemon';
import Error from "./component/Error/Error"

function App() {
  // Accessing values from the Context
  const { setUser, setIsAuthenticated, setLoading, preUrl, setPreUrl, nextUrl, setNextUrl, pokData, setPokemonData } =
    useContext(Context);

  // Fetching Pokemon data from the PokeAPI
  const pokfun = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');

    // Setting the next and previous URLs for pagination
    setNextUrl(res.data.next);
    setPreUrl(res.data.previous);

    // Fetching individual Pokemon data
    getPokemon(res.data.results);
  };

  // Fetching data for individual Pokemon
  const getPokemon = async (res) => {
    res.forEach(async (item) => {
      const result = await axios.get(item.url);

      // Updating the Pokemon data in the state
      setPokemonData((state) => [...state, result.data]);
    });

    // Filtering out duplicate Pokemon data based on ID
    setPokemonData((state) =>
      state.filter((item, index) => index === state.findIndex((obj) => obj.id === item.id))
    );

    // Sorting the Pokemon data by ID
    setPokemonData((state) => state.sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    // Set the loading state to true
    setLoading(true);

    // Fetch Pokemon data and user profile
    pokfun();
    axios
      .get(`/api/v1/users/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        // Set the user data, authentication status, and loading state
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        // Reset user data, authentication status, and loading state in case of error
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/mypokemon" element={<MyPokemon />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
