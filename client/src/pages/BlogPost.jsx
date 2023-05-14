import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import example from '../assets/images/example.jpg'


const BlogPost = () => {
  const { id } = useParams()
  let [blog, setBlog] = useState({})

  useEffect(() => {
    getBlog()
  }, [])

  const getBlog = async () => {
    //change to axios
    let config = {
      method: 'get',
      url: `/api/single-blog/${id}`,
    };
    await axios.request(config)
      .then((response) => {
        setBlog(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='container'>
      <div>
        <div className='text-center p-3'>
          <h1 className='text-5xl md:text-6xl leading-tighter tracking-tight font-bold'>Blog Title</h1>
          <p className='p-3'>Written by Fredcode</p>
        </div>
        <hr />
      </div>

      <div className='h-50'>
        <img src={blog.image ? blog.image : example} className='w-full m-h-[200px] h-full rounded-xl' />
      </div>

      <div className='mt-4'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum totam delectus, beatae eos ad obcaecati unde explicabo? Necessitatibus molestias eos, 
        illum nihil similique unde ducimus porro sunt explicabo minus. Doloremque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia numquam molestias aliquam nam eum odit quas dicta, itaque totam perferendis impedit, 
        reprehenderit consequuntur corrupti, eveniet eligendi dolores. Quaerat, illum.
      </div>

    </div>
  )
}

export default BlogPost
