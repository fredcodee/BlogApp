import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'
import Logout from './pages/Logout';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import BlogPost from './pages/BlogPost';
import NavBar from './components/NavBar';
 
function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route element = {<Home />}  path = "/"/>
            <Route element = {<Blog />} path = "/blog" />
            <Route element = {<BlogPost />} path = "/blog/:id" />

            {/* admin/editor */}
            <Route element = {<Login />} path = "/login" />
            <Route element = {<Register/>} path = "/register" />
            <Route element = {<Logout />} path  = "/logout"/>
            <Route element = {<Admin/>} path = "/admin-dashboard" /> 
        </Routes>
      </BrowserRouter>
  )
}

export default App
