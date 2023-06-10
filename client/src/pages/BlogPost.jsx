import React, { useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AuthContext from '../context/AuthContext'
import PinnedPosts from '../components/PinnedPosts'
import example from '../assets/images/example.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare, faTrashCan, faMapPin } from '@fortawesome/free-solid-svg-icons';





const BlogPost = () => {
  const { id } = useParams()
  let [blog, setBlog] = useState({})
  let { user } = useContext(AuthContext)
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [picks, setPicks] = useState([])
  const history = useNavigate()

  useEffect(() => {
    getBlog(),
      randomBlogs()
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

  const randomBlogs = async () => {
    let config = {
      method: 'get',
      url: '/api/random-pinned-blogs',
    };
    await axios.request(config)
      .then((response) => {
        setPicks(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const handleDelete = async () => {
    const token = localStorage.getItem('authTokens').replace(/"/g, '');
    const body = {
      id: id,
    }
    const response = await axios.post('/api/admin/delete-blog', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        history('/admin-dashboard')
      }
      )
      .catch((error) => {
        console.log(error);
        setShowDeletePopup(false)
      }
      );
  }

  const pinBlog = async () => {
    const token = localStorage.getItem('authTokens').replace(/"/g, '');
    const body = {
      id: id,
    }

    const response = await axios.post('/api/admin/pin-blog', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        window.location.reload();
      }
      )
      .catch((error) => {
        console.log(error);
      }
      );
  }

  const handleShare = async(social) => {
    const url = window.location.href; 
    const title = blog.title; 

    // Create the sharing URLs for each social media platform
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    const twitterUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;

    // Open the sharing URLs in new tabs
    if (social === 'facebook') {
      window.open(facebookUrl, '_blank');
    }
    if (social === 'twitter') {
      window.open(twitterUrl, '_blank');
    }
    if (social === 'linkedin') {
      window.open(linkedinUrl, '_blank');
    }

  };



  return (
    <div className='container'>
      <div>
        <div className='text-center p-3'>
          {user ? (

            <div className='flex justify-center space-x-4 pb-3'>
              <Link to={`/edit/${id}`} className='p-2'>
                <FontAwesomeIcon icon={faPenToSquare} size="2x" color="#1DA1F2" />
              </Link>
              {blog.pin ? (
                <Link to="#" className='p-2'>
                  <FontAwesomeIcon icon={faMapPin} size="2x" color="green" onClick={pinBlog} />
                </Link>
              ) : (
                <Link to="#" className='p-2'>
                  <FontAwesomeIcon icon={faMapPin} size="2x" color="orange" onClick={pinBlog} />
                </Link>
              )
              }
              <Link to="#" className='p-2'>
                <FontAwesomeIcon icon={faTrashCan} size="2x" color="red" onClick={() => setShowDeletePopup(true)} />
              </Link>
            </div>
          ) : null}
          <h1 className='text-5xl md:text-6xl leading-tighter tracking-tight font-bold'>{blog.title}</h1>
          <p className='p-3'>Written by Fredcode</p>
        </div>
        <hr />
      </div>

      <div className='min-h-[300px] lg:min-h-[400px]'>
        <img src={blog.image ? `/uploads/${blog.image}` : example} className='w-full h-full object-cover rounded-xl' />
      </div>
      <div className='mt-4 mb-5' dangerouslySetInnerHTML={{ __html: blog.description }}></div>

      <div>
        <div className='text-center p-3 text-gray-500'>
          <h3>Share this blog post with your friends</h3>
        </div>
        <div className="flex justify-center space-x-4 ">
          <Link>
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" className="my-twitter-icon" onClick={() => handleShare('twitter')} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#1DA1F2" onClick={() => handleShare('facebook')} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#1DA1F2" className="my-linkedin-icon" onClick={() => handleShare('linkedin')} />
          </Link>
        </div>
      </div>

      <div className='bg-gray-100 mt-5'>
        <div className='pt-3'>
          <h2 className='text-2xl font-bold'>ARTICLES YOU MAY LIKE</h2>
        </div>
        <PinnedPosts  randomPins={picks}/>
        <hr />
      </div>
      {showDeletePopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl font-bold">Delete Confirmation</h2>
            <p>Are you sure you want to delete this blog?</p>
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleDelete}>
                Delete
              </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2" onClick={() => setShowDeletePopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default BlogPost
