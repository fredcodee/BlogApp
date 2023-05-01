import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "../assets/css/signup.css"
import { Link } from 'react-router-dom'

const Register = () => {
  const { passcode } = useParams()

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
        console.log(error);
       //return to home page
      });
  }

  return (
    <div>
        <form>
            <h2>Register A New Admin</h2>
            <br/>
            <label htmlFor="name">Name</label>
            <br/>
            <input id="name" type="text" name="name"/>
            <br/>
            <label htmlFor="email">Email</label>
            <br/>
            <input id="email" type="email" name="email"/>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input id="password" type="password" name="password"/>
            <br/>
            <input id="button" type="submit" value="Submit"/>
            <br/>
            <Link to="/blog">Nevermind</Link>
            
        </form>
    </div>
  );
}

export default Register
