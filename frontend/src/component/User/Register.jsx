// import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Context,server } from '../../main';
import { useContext } from 'react';
import { NavLink,Navigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import axios from 'axios';
import "./../../assets/styles/User/register.css"

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setUser } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');
  const [signup, setsignup] = useState(false);
  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
  
      const { data } = await axios.post(
        `${server}/api/v1/users/signup`,
        {
          name,
          email,
          password,
          Cpassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setLoading(false);
      // setIsAuthenticated(true);
      setsignup(true);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
    }
     
  };
  if(signup)  return <Navigate to={"/signin"} />;
  return (
    <div className="reg-form-con">
      <div className='form-box'>
        <div className="form-form">
          <div className="form-title">Welcome Back</div>
          <div className="form-subtitle"></div>
          {/* Name input field */}
          <div className="form-input-container form-ic2">
            <input id="name" className="form-input" type="text" placeholder=" " name='email'
              value={name} 
              onChange={(e) => setName(e.target.value)}  required
            />
            <div className="form-cut form-cut-short"></div>
            <label htmlFor="email" className="form-placeholder">Name</label>
          </div>
          {/* Email input field */}
          <div className="form-input-container form-ic2">
            <input id="email" className="form-input" type="email" placeholder=" " name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}  required
            />
            <div className="form-cut form-cut-short"></div>
            <label htmlFor="email" className="form-placeholder">Email</label>
          </div>
          {/* Password input field */}
          <div className="form-input-container form-ic2">
            <input id="password" className="form-input" type="password" placeholder=" " name='email'
              value={password}
              onChange={(e) => setPassword(e.target.value)}  required
            />
            <div className="form-cut form-cut-short"></div>
            <label htmlFor="email" className="form-placeholder">Password</label>
          </div>
          {/* Confirm Password input field */}
          <div className="form-input-container form-ic1">
            <input id="Cpassword" className="form-input" type="password" placeholder=" " name='password'
              value={Cpassword}
              onChange={(e) => setCPassword(e.target.value)} required
            />
            <div className="form-cut"></div>
            <label htmlFor="firstname" className="form-placeholder">Confirm Password</label>
          </div>
          {/* Submit button */}
          <button type="submit"
            // disabled={disableBtn}
            onClick={submitHandler}
            className="form-submit">Sign In</button>
          <br />
         
          <p className="form-btm-text"> Already registered? {' '}
            {/* Login link */}
            <NavLink exact to="/signin" className="form-btm-a" >Login </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
