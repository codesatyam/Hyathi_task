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

function App() {
  const { setUser, setIsAuthenticated, setLoading, preUrl, setPreUrl, nextUrl, setNextUrl, pokData, setPokemonData } =
    useContext(Context);

  const pokfun = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');

    setNextUrl(res.data.next);
    setPreUrl(res.data.previous);
    getPokemon(res.data.results);
  };

  const getPokemon = async (res) => {
    res.forEach(async (item) => {
      const result = await axios.get(item.url);
      setPokemonData((state) => [...state, result.data]);
    });
  console.log(pokData.length);
    setPokemonData((state) =>
      state.filter((item, index) => index === state.findIndex((obj) => obj.id === item.id))
    );

    setPokemonData((state) => state.sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    setLoading(true);
    pokfun();

    axios
      .get(`/api/v1/users/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/mypokemon" element={<MyPokemon />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
