import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


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
      url: `http://localhost:1900/api/single-blog/${id}`,
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
    <div>
      <h1> {blog.title}</h1>
      <p> {blog.description}</p> 
    </div>
  )
}

export default BlogPost
