import React from 'react'
import example from '../assets/images/example.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../api'
import "../assets/css/loader.css"

const BlogGrid = () => {
    const [loading, setLoading] = useState(false);
    let [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        getBlogs(currentPage);
    }, [currentPage]);


    const getBlogs = async (page) => {
        try {
            setLoading(true); // Set loading before sending API request
            const response = await api.post('/api/all-blogs', { page });
            setBlogs(response.data.blogs);
            setTotalPages(response.data.totalPages);
            setLoading(false); // Stop loading
        } catch (error) {
            setLoading(false); // Stop loading in case of error
            console.log(error);
        }
    };

    const handlePageChange = (page) => {
        if ( currentPage === page ) return;
        setCurrentPage(page);
        getBlogs(page);
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let page = 1; page <= totalPages; page++) {
            buttons.push(
                <button
                    key={page}
                    className={`mx-1 px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div>
            {loading ?
                <div class="load-wrapp">
                    <div class="load-3">
                        <p>Loading...</p>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div> : null}
            <div className='grid grid-cols-1 md:grid-cols-3 container p-6 gap-5'>
                {blogs.map((blog, index) => {
                    return (
                        <Link key={index} to={`/blog/${blog._id}`} className='no-underline text-black'>
                            <div className='grid1-item'>
                                <div>
                                    {/* if blog.image is not null, use blog.image, else use example */}
                                    <img src={blog.image ? blog.image : example} className='w-full m-h-[200px] h-full rounded-xl' alt='Blog Image' />
                                </div>
                                <div className='p-2'>
                                    <p style={{ marginBottom: '0' }}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                    <h3 className='hover:text-darkOrange'>{blog.title}</h3>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className=' container text-center mb-4'>
                <hr />
                {renderPaginationButtons()}
            </div>
        </div>

    );
};

export default BlogGrid;
