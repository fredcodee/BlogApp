import React from 'react'
import BlogGrid from '../components/BlogGrid'


const Blog = () => {
  return (
    <div>
      <div className='text-center p-6'>
        <h1 className='text-5xl md:text-6xl leading-tighter font-medium  tracking-tighter'>The FredCode Blog</h1>
        <small className='text-base'>Welcome Nerds 🤓, Feel At Home While I Document My Software Developer Journey 📒🗨️</small>
      </div>
      <hr className='container'/>
      <BlogGrid/>

      <div className='container'>
        <section className="p-10 md:p-14 bg-slate-100 rounded-xl md:rounded-2xl flex flex-col md:flex-row justify-between md:items-center gap-6 pb-4">
          <h2 role="text" className="text-xl md:text-2xl tracking-tight  font-medium flex gap-4 items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-8 w-8 text-secondary-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M475.22 206.52c-10.34-48.65-37.76-92.93-77.22-124.68A227.4 227.4 0 00255.82 32C194.9 32 138 55.47 95.46 98.09 54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0035.65 118.76l4.35 6.05L48 480l114.8-28.56s2.3.77 4 1.42 16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9 59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 00-4.78-44.97zM160 288a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z">
                </path>
            </svg>
            <span>You can get in touch with me.</span>
          </h2>
          <a className="flex flex-wrap gap-2 group tracking-tight font-medium cursor-pointer rounded-lg px-3 py-2 text-lg  bg-primary-600 text-primary-50 hover:bg-primary-800 undefined w-auto !items-center bg-slate-300 !text-slate-700 !hover:text-slate-200 hover:bg-orange-500 " href="/contact">
            <span>Get in touch</span>
          </a>
        </section>
      </div>

      <hr />
    </div>
  )
}

export default Blog
