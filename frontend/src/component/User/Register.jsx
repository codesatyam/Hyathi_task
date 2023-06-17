// import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Context } from '../../main';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import "./../../assets/styles/User/register.css"

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setUser } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');

  return (
    <div className="form-con">
      <div className='form-box'>
        <div className="form-form">
          <div className="form-title">Welcome Back</div>
          <div className="form-subtitle"></div>
          {/* Name input field */}
          <div className="form-input-container form-ic2">
            <input id="email" className="form-input" type="text" placeholder=" " name='email'
              value={email}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="form-cut form-cut-short"></div>
            <label htmlFor="email" className="form-placeholder">Name</label>
          </div>
          {/* Email input field */}
          <div className="form-input-container form-ic2">
            <input id="email" className="form-input" type="email" placeholder=" " name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="form-cut form-cut-short"></div>
            <label htmlFor="email" className="form-placeholder">Email</label>
          </div>
          {/* Password input field */}
          <div className="form-input-container form-ic2">
            <input id="email" className="form-input" type="password" placeholder=" " name='email'
              value={email}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form-cut form-cut-short"></div>
            <label htmlFor="email" className="form-placeholder">Password</label>
          </div>
          {/* Confirm Password input field */}
          <div className="form-input-container form-ic1">
            <input id="password" className="form-input" type="password" placeholder=" " name='password'
              value={password}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <div className="form-cut"></div>
            <label htmlFor="firstname" className="form-placeholder">Confirm Password</label>
          </div>
          {/* Submit button */}
          <button type="submit"
            // disabled={disableBtn}
            // onClick={loginUser}
            className="form-submit">Sign In</button>
          <br />
          <br />
          <p className="form-btm-text"> Already registered? {' '}
            {/* Login link */}
            <a exact to="/signin" className="form-btm-a" >Login </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
