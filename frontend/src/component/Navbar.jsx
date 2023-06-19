import React,{useContext} from 'react'
import { NavLink,Link } from "react-router-dom";
import "../assets/styles/Navbar.css"
import { Context ,server } from ".././main"; 
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated,loading, setLoading,user,setlogU } =useContext(Context);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/api/v1/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
      // setlogU(true);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
      // setlogU(false);
    }
  };
  return (
    <>
     <nav>
       <input type="checkbox"  id="check" />
       <label  for="check" className='checkbtn'>
        <i className="fa fa-bars"></i>
       </label>
        <label class="logo">Pokemon<span>APP</span></label>
        <ul>
            <li> <NavLink className='active'  exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/adopt">Adopt</NavLink></li>
            <li><NavLink  exact to="/mypokemon">My Pokemon</NavLink></li>
            <li><NavLink  exact to="/profile">Profile</NavLink></li>
            <li><NavLink  exact to="/help">Help</NavLink></li>
            {isAuthenticated?<li><NavLink disabled={loading} onClick={logoutHandler} exact to="/">Logout</NavLink></li>:
            <li><NavLink exact to="/signin">Login</NavLink></li>}
        </ul>
     </nav>
    </>
  )
}

export default Navbar
