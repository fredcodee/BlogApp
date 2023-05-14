import React, { useContext }from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AuthContext from '../context/AuthContext'
import PinnedPosts from '../components/PinnedPosts'
import example from '../assets/images/example2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';




const BlogPost = () => {
  const { id } = useParams()
  let [blog, setBlog] = useState({})
  let { user } = useContext(AuthContext)

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
          { user? <Link to ="/edit"><FontAwesomeIcon icon={faPenToSquare} size="2x" color="#1DA1F2"/></Link> : null}
          <h1 className='text-5xl md:text-6xl leading-tighter tracking-tight font-bold'>Blog Title</h1> 
          <p className='p-3'>Written by Fredcode</p>
        </div>
        <hr />
      </div>

      <div className='min-h-[300px] lg:min-h-[400px]'>
        <img src={blog.image ? blog.image : example} className='w-full h-full object-cover rounded-xl' />
      </div>


      <div className='mt-4 mb-5'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum totam delectus, beatae eos ad obcaecati unde explicabo? Necessitatibus molestias eos,
        illum nihil similique unde ducimus porro sunt explicabo minus. Doloremque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia numquam molestias aliquam nam eum odit quas dicta, itaque totam perferendis impedit,
        reprehenderit consequuntur corrupti, eveniet eligendi dolores. Quaerat, illum.
      </div>

      <div>
        <div className='text-center p-3 text-gray-500'>
          <h3>Share this post with your friends</h3>
        </div>
        <div className="flex justify-center space-x-4 ">
          <Link to="https://twitter.com/fredcode_" className="no-underline">
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" className="my-twitter-icon" />
          </Link>
          <Link to="/" className="no-underline">
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#1DA1F2"/>
          </Link>
          <Link to="https://www.linkedin.com/in/wilfred-chukwu-891830174/" className="no-underline">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#1DA1F2" className="my-linkedin-icon" />
          </Link>
        </div>
      </div>

      <div className='bg-gray-100 mt-5'>
        <div className='pt-3'>
          <h2 className='text-2xl font-bold'>ARTICLES YOU MAY LIKE</h2>
        </div>
        <PinnedPosts />
        <hr />
      </div>

    </div>
  )
}

export default BlogPost
