import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from "./component/Home";
import Login from "./component/User/Login";
import Register from "./component/User/Register";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context} from "./main";

function App() {
  // const [count, setCount] = useState(0)
  const { setUser, setIsAuthenticated, setLoading,preUrl,setPreUrl,nextUrl,setNextUrl ,pokData,setPokemonData} = useContext(Context);
const pokfun=async ()=>{
  const res= await axios.get("https://pokeapi.co/api/v2/pokemon/");
  
  setNextUrl(res.data.next);
  setPreUrl(res.data.previous);
  getPokemon(res.data.results);
  // console.log(pokData);
}
  const getPokemon= async(res)=>{
    res.map(async(item)=>{
          
      const result=await axios.get(item.url);
      setPokemonData(state=>{
        state=[...state,result.data];
        return state;
      });

    })
    //  console.log(pokData);
  }
  useEffect(() => {
    setLoading(true);
    pokfun();
    axios
      .get(`/api/v1/users/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
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
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route exact  path="/signin" element={<Login />} /> 
         <Route exact path="/signup" element={<Register />} />
         
      </Routes>
      <Footer />
     <Toaster/>
    </Router>
  )
}

export default App
