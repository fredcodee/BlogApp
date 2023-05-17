import React, { useContext } from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const NavBar = () => {
  let { user } = useContext(AuthContext)
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
              <Link to="/contact" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">User Management</Link>
              <Link to="/logout" className=" font-medium text-red-500 hover:text-blue text-lg no-underline">Logout</Link>
            </div>
          ) : (
            <div className="hidden md:flex space-x-10">
              <Link to="/" className="text-slate-600 font-mediu hover:text-darkOrange text-lg no-underline">Home</Link>
              <Link to="/blog" className="text-slate-600 font-medium hover:text-darkOrange text-lg no-underline">Blog</Link>
              <Link to="/contact" className="text-slate-600 font-mediu hover:text-darkOrange text-lg no-underline">Contact</Link>
              <a href="/" className='flex flex-wrap items-center gap-2 group tracking-tight font-medium cursor-pointer  rounded-lg px-3 py-2 text-lg bg-orange-300 text-secondary-900 hover:bg-blue-400 undefined w-auto'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" transition-transform h-6 w-6  order-last group-hover:translate-x-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M176 272l80 80 80-80M256 48v288"></path></svg>
                <span className='text-white'>My Cv</span>
              </a>
            </div>
          )}

        </div>
      </nav>
      <hr />
    </div>
  )
}

export default NavBar
