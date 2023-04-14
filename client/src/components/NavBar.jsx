import React from 'react'
import logo from '../assets/images/logo.jpg'

const NavBar = () => {
  return (
    <div className='bg-brightBlue font-mono'>
      <nav className="relative container mx-auto p-6  ">
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <img src={logo} className="w-12 h-12" />
            </div>
            <div className="hidden md:flex space-x-10">
                <a href="#" className="text-white hover:text-darkOrange text-lg no-underline">Home</a>
                <a href="#" className="text-white hover:text-darkOrange text-lg no-underline">Blog</a>
                <a href="#" className="text-white hover:text-darkOrange text-lg no-underline">Contact</a>
            </div>
            
        </div>
      </nav>
    </div>
  )
}

export default NavBar
