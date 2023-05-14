import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'
import Logout from './pages/Logout';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utlis/PrivateRoute';
 
function App() {
  return (
      <BrowserRouter>
      <AuthProvider>
        <NavBar/>
        <Routes>
            <Route element = {<Home />}  path = "/"/>
            <Route element = {<Blog />} path = "/blog" />
            <Route element = {<BlogPost />} path = "/blog/:id" />
            <Route element = {<Contact />} path = "/contact" />

            {/* admin/editor */}
            <Route element = {<Login />} path = "/admin/login/:passcode" />
            <Route element = {<Register/>} path = "/admin/register/:passcode" />
            <Route element = {<Logout />} path  = "/logout"/>
            <Route element = {<PrivateRoute> <Admin /></PrivateRoute>} path = "/admin-dashboard" /> 
        </Routes>
        <Footer/>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App
