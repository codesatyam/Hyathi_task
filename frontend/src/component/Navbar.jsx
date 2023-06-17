import React,{useContext} from 'react'
import { NavLink,Link } from "react-router-dom";
import "../assets/styles/Navbar.css"
import { Context  } from ".././main"; 
const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated,loading, setLoading,user,setlogU } =useContext(Context);
  return (
    <>
     <nav>
       <input type="checkbox"  id="check" />
       <label  for="check" className='checkbtn'>
        <i className="fa fa-bars"></i>
       </label>
        <label class="logo">PokemonAPP</label>
        <ul>
            <li> <a className='active' href="/">Home</a></li>
            <li><a href="">Adopt</a></li>
            <li><a href="">My Pokemon</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Help</a></li>
            {isAuthenticated?<li><NavLink   exact to="#">Logout</NavLink></li>:
            <li><NavLink exact to="/signin">Login</NavLink></li>}
        </ul>
     </nav>
    </>
  )
}

export default Navbar
