import React from 'react'
import {useEffect, useContext, useState } from 'react'
import api from '../api';
import { useParams, useNavigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import "../assets/css/signup.css"
import { Link } from 'react-router-dom'

const Login = () => {
  const { loginUser, error } = useContext(AuthContext);
  const { passcode } = useParams()
  const history = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkPasscode()
  }, [])

  let checkPasscode = async () => {
    try {
      const response = await api.post('/api/admin/check-passcode', {
        passcode: passcode,
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
      history('/');
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(email, password);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Admin Login</h2>
            {error && <div className='text-center text-red-500'>{error}</div>}
            <br/>
            <label htmlFor="email">Email</label>
            <br/>
            <input id="email" type="email" name="email" onChange={e => setEmail(e.target.value)}/>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input id="password" type="password" name="password"  onChange={e => setPassword(e.target.value)}/>
            <br/>
            <input id="button" type="submit" value="Submit"/>
            <br/>
           <Link to="/blog">Nevermind</Link>
            
        </form>
    </div>
  );
}

export default Login
