import React,{  useState } from 'react';
import { Context } from '../../main';
import { useContext } from 'react'; 
import { NavLink ,Navigate} from 'react-router-dom';
import { toast } from "react-hot-toast";
import axios from 'axios';
import { server } from '../../main';
import "./../../assets/styles/User/login.css"

const Login=()=> {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setUser } =useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(email,password);

    try {
      const {data}  = await axios.post(
        `${server}/api/v1/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      toast.success(data.message);
      
      // window.alert(data.udata.name);
      setUser(data.udata);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="log-form-con">
 <div className='form-box'>
      <div className="form-form">
        <div className="form-title">Welcome Back</div>
        <div className="form-subtitle"></div>
        <div className="form-input-container form-ic2">
          <input id="email" className="form-input" type="email" placeholder=" " name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-cut form-cut-short"></div>
          <label htmlFor="email" className="form-placeholder">Email</label>
        </div>
        <div className="form-input-container form-ic1">
          <input id="password" className="form-input" type="password" placeholder=" " name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-cut"></div>
          <label htmlFor="firstname" className="form-placeholder">Password</label>
        </div>
        <button type="submit"
        //   disabled={disableBtn}
          onClick={submitHandler}
          className="form-submit">Sign In</button>
        <br />
        <br />
        <p className="form-btm-text"> New User? {' '}
          <NavLink exact to="/signup" className="form-btm-a" >Sign Up </NavLink>
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default Login;