import React, { useContext } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/images/logo.jpg'
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
              <a href="/blog" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">Blog</a>
              <a href="/admin-dashboard" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">Admin-Dashboard</a>
              <a href="/write" className="text-blue-400 font-medium hover:text-darkOrange text-lg no-underline ">New Post</a>
              <a href="/users" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">User Management</a>
              <a className=" font-medium text-red-500 hover:text-blue text-lg no-underline" onClick={handleLogout}>Logout</a>
            </div>
          ) : (
            <div className="hidden md:flex space-x-10">
              <a href="/" className="text-slate-600 font-mediu hover:text-darkOrange text-lg no-underline">Home</a>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline"
              >
                Experience
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline"
              >
                Projects
              </ScrollLink>
              <a href="/blog" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">Blog</a>
              <a href="/contact" className="text-slate-600 font-mediu hover:text-darkOrange text-lg no-underline">Contact</a>
            </div>
          )}

        </div>
      </nav>
    </div>
  )
}

export default NavBar
