import React from 'react'
import BlogGrid from '../components/BlogGrid'


const Blog = () => {
  return (
    <div>
      <div className='text-center p-6 bg-lightGrey'>
        <h1 className='font-bold'>THE FREDCODE BLOG</h1>
        <small className='text-lg'>"Welcome Nerds 🤓, Feel At Home While I Document My Software Developer Journey 📒🗨️"</small>
      </div>
      <BlogGrid/>
    </div>
  )
}

export default Blog
