import React from 'react'
import example from '../assets/images/example.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BlogGrid = () => {
    let [blogs, setBlogs] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])
    
    const getBlogs = async () => {
        //change to axios
        let config = {
            method: 'post',
            url: '/api/all-blogs',
          };
        await axios.request(config)
          .then((response) => {
            setBlogs(response.data.blogs)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 container p-6 gap-5'>
            {blogs.map((blog, index) => {
                return (
                    <Link key={index} to={`/blog/${blog._id}`} className='no-underline text-black'>
                        <div className="grid1-item">
                            <div>
                                {/* if blog.image is not null, use blog.image, else use example */}
                                <img src={blog.image ? `/uploads/${blog.image}`  : example} className='w-full m-h-[200px] h-full rounded-xl'/>
                            </div>
                            <div className='p-2'>
                                <p style={{marginBottom:"0"}}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                <h3 className='hover:text-darkOrange'>{blog.title}</h3>  
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default BlogGrid
