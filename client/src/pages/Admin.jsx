import React from 'react'
import { useEffect, useState } from 'react'
import Bloglists from '../components/Bloglists'


const Admin = () => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [isLoaded, setIsLoaded] = useState(false);
  const [postscopy, setPostscopy] = useState([])


  useEffect(() => {
      getPosts();
  }, []);

  let getPosts = async () => {
    try {
      const token = localStorage.getItem('authTokens').replace(/"/g, '');

      const response = await fetch('/api/admin/all-blogs', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setPosts(data);
      setPostscopy(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const filteredPosts = postscopy.filter(post => post.title.includes(search));
      if (filteredPosts.length === 0) {
        setPosts([ {title: 'No results found', pin:false}])
      }else{
      setPosts(filteredPosts);}
    } catch (error) {
      console.log(error);
    }
  }

  


  return (
    <div className='container'>
      <div className='text-center p-6'>
        <h1 className='font-bold'>Admin Dashboard 🧰</h1>
        <hr />
      </div>
      <div className='search'>
        <div className="max-w-2xl mx-auto">
          <form className="flex items-center" style={{minHeight:'0', width:'500px', margin: '0% auto'}} onSubmit={handleSearch}>
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required  onChange={e => setSearch(e.target.value)}/>
            </div>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
          </form>
          <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>
      </div>
      <div className="allBlogs">
        <div>
          <h2 className='text-lg'>Blogs Posted</h2>
          <hr />
        </div>
        <Bloglists posts={posts} />

        <div>

        </div>
      </div>


    </div>
  )
}

export default Admin
