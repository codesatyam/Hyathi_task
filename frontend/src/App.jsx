import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 
import Footer from './component/Footer'
import Navbar from './component/Navbar'

import './App.css'
import Home from "./component/Home";
import Login from "./component/User/Login";
import Register from "./component/User/Register";
 

function App() {
  // const [count, setCount] = useState(0)

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
     
    </Router>
  )
}

export default App
