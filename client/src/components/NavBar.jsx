import React, {useContext} from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const NavBar = () => {
  let { user } = useContext(AuthContext)
  return (
    <div className='bg-brightBlue font-mono'>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="flex items-center pt-2">
                <img src={logo} className="w-12 h-12" />
                <h2 className='text-white text-lg font-bold'>Fredcode</h2>
            </div>
            
              {user ? (
                <div className="hidden md:flex space-x-10">
                  <Link to="/blog" className="text-white hover:text-darkOrange text-lg no-underline">Blog</Link>
                  <Link to="/admin-dashboard" className="text-white hover:text-darkOrange text-lg no-underline">Admin-Dashboard</Link>
                  <Link to="/blog" className="text-white hover:text-darkOrange text-lg no-underline">New Post</Link>
                  <Link to="/contact" className="text-white hover:text-darkOrange text-lg no-underline">User Management</Link>
                  <Link to="/logout" className="text-red-500 hover:text-darkOrange text-lg no-underline">Logout</Link>
                </div>
              ):(
                <div className="hidden md:flex space-x-10">
                  <Link to="/" className="text-white hover:text-darkOrange text-lg no-underline">Home</Link>
                  <Link to="/blog" className="text-white hover:text-darkOrange text-lg no-underline">Blog</Link>
                  <Link to="/contact" className="text-white hover:text-darkOrange text-lg no-underline">Contact</Link>
                </div>
              )}  
            
        </div>
      </nav>
    </div>
  )
}

export default NavBar
