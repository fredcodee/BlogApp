import React from 'react'
import {useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import "../assets/css/signup.css"
import { Link } from 'react-router-dom'

const Register = () => {
  const { registerUser, error: contextError } = useContext(AuthContext);
  const { passcode } = useParams()
  const history = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    checkPasscode()
  }, [])

  let checkPasscode = async () => {
    let config = {
      method: 'post',
      url: '/api/admin/check-passcode',
      headers:{
        'Content-Type':'application/json'
      },
      data: {
        passcode: passcode
          
      }
    };

    await axios.request(config)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        history('/');
      });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await registerUser(email, password);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Register A New Admin</h2>
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
            {error && <div className='text-center text-red-500'>{error}</div>}
            {contextError && <div className='text-center text-red-500'>{contextError}</div>}
            <Link to="/blog">Nevermind</Link>
            
        </form>
    </div>
  );
}

export default Register
