import React from 'react'
import example from '../assets/images/example.jpg'

const PinnedPosts = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-6 gap-5'>
            <div className="grid1-item">
                <div>
                    {/* if blog.image is not null, use blog.image, else use example */}
                    <img src={example} className='w-full m-h-[200px] h-full rounded-xl' />
                </div>
                <div className='p-2'>
                    {/* <p style={{ marginBottom: "0" }}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p> */}
                    <p style={{ marginBottom: "0" }}>24th, july 2023</p>
                    <h3 className='hover:text-darkOrange'>Blog Title 1</h3>
                </div>
            </div>
            <div className="grid1-item">
                <div>
                    {/* if blog.image is not null, use blog.image, else use example */}
                    <img src={example} className='w-full m-h-[200px] h-full rounded-xl' />
                </div>
                <div className='p-2'>
                    {/* <p style={{ marginBottom: "0" }}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p> */}
                    <p style={{ marginBottom: "0" }}>24th, july 2023</p>
                    <h3 className='hover:text-darkOrange'>Blog Title 1</h3>
                </div>
            </div>
            <div className="grid1-item">
                <div>
                    {/* if blog.image is not null, use blog.image, else use example */}
                    <img src={example} className='w-full m-h-[200px] h-full rounded-xl' />
                </div>
                <div className='p-2'>
                    {/* <p style={{ marginBottom: "0" }}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p> */}
                    <p style={{ marginBottom: "0" }}>24th, july 2023</p>
                    <h3 className='hover:text-darkOrange'>Blog Title 1</h3>
                </div>
            </div>
        </div>
    )
}

export default PinnedPosts
