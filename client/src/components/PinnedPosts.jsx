import React from 'react'
import example from '../assets/images/example.jpg'
import { Link } from 'react-router-dom'

const PinnedPosts = ({randomPins}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-6 gap-5'>
            {randomPins.map((pin, index) =>{
                return(
                    <Link to={`/blog/${pin._id}`} className='no-underline text-black' key={index}>
                        <div className="grid1-item hover:text-darkOrange">
                            <div>
                                <img src={pin.image ? `/uploads/${pin.image}`: example} className='w-full m-h-[200px] h-full rounded-xl' />
                            </div>
                            <div className='p-2'>
                                {/* <p style={{ marginBottom: "0" }}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p> */}
                                <p style={{ marginBottom: "0" }}>{new Date(pin.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                <h3>{pin.title}</h3>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default PinnedPosts
