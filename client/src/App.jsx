import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'
import Logout from './pages/Logout';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import BlogPost from './pages/BlogPost';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route element = {<Home />}  path = "/"/>
            <Route element = {<Blog />} path = "/blog" />
            <Route element = {<BlogPost />} path = "/blog-post" />

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
