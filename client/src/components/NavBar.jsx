import React, { useContext } from 'react'
import logo from '../assets/images/logo.jpg'
import { Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const NavBar = () => {
  let { user } = useContext(AuthContext)

  //logot and delete tokens in local storage
  const handleLogout = () => {
    localStorage.removeItem('authTokens')
    localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <div className=''>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center pt-2">
            <img src={logo} className="w-12 h-12 rounded-full mr-2" />
            <h2 className='text-2xl font-bold'>Fredcode</h2>
          </div>

          {user ? (
            <div className="hidden md:flex space-x-10">
              <Link to="/blog" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">Blog</Link>
              <Link to="/admin-dashboard" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">Admin-Dashboard</Link>
              <Link to="/write" className="text-blue-400 font-medium hover:text-darkOrange text-lg no-underline ">New Post</Link>
              <Link to="/users" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">User Management</Link>
              <Link className=" font-medium text-red-500 hover:text-blue text-lg no-underline" onClick={handleLogout}>Logout</Link>
            </div>
          ) : (
            <div className="hidden md:flex space-x-10">
              <Link to="/" className="text-slate-600 font-mediu hover:text-darkOrange text-lg no-underline">Home</Link>
              <Link to="#experience" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">Experience</Link>
              <Link to="#" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">Projects</Link>
              <Link to="/blog" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">Blog</Link>
              <Link to="/contact" className="text-slate-600 font-mediu hover:text-darkOrange text-lg no-underline">Contact</Link>
              
            </div>
          )}

        </div>
      </nav>
    </div>
  )
}

export default NavBar
