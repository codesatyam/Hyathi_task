import React,{useContext,useState} from 'react'
import { NavLink,Link } from "react-router-dom";
import "../assets/styles/Navbar.css"
import { Context ,server } from ".././main"; 
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated,loading, setLoading,user,setlogU } =useContext(Context);


   const [activeItem, setActiveItem] = useState(0); // Initial active item index

  // Function to handle item click and update the active item
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

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
            <li> <NavLink   className={`${activeItem === 0 ? 'active' : ''} nav-links`} onClick={() => handleItemClick(0)}   exact to="/">Home</NavLink></li>
            <li><NavLink   className={`${activeItem === 1 ? 'active' : ''} nav-links`} onClick={() => handleItemClick(1)}   exact to="/adopt">Adopt</NavLink></li>
            <li><NavLink className={`${activeItem === 2 ? 'active' : ''} nav-links`} onClick={() => handleItemClick(2)}  exact to="/mypokemon">My Pokemon</NavLink></li>
            {isAuthenticated?<li><NavLink className={`${activeItem === 3 ? 'active' : ''} nav-links`} onClick={() => handleItemClick(3)}  exact to="/profile">Profile</NavLink></li>:""}
            <li><NavLink className={`${activeItem === 4 ? 'active' : ''} nav-links`} onClick={() => handleItemClick(4)}  exact to="/help">Help</NavLink></li>
            {isAuthenticated?<li><NavLink  className="active" disabled={loading} onClick={logoutHandler} exact to="/">Logout</NavLink></li>:
            <li><NavLink  className={`${activeItem === 5 ? 'active' : ''} nav-links`} onClick={() => handleItemClick(5)} exact to="/signin">Login</NavLink></li>}
        </ul>
     </nav>
    </>
  )
}

export default Navbar
