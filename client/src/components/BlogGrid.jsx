import React from 'react'
import example from '../assets/images/example.jpg'
import { Link } from 'react-router-dom'

const BlogGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 container p-6 gap-5'>
            <Link to="#" className='no-underline text-black'>  
                <div className="grid1-item">
                    <div>
                        <img src={example} alt="" />
                    </div>
                    <div className='p-6'>
                        <h3 className='hover:text-darkOrange'>How i learned flask in one week by building</h3>
                        <p>by Fred, on 14th, april 2019</p>
                    </div>
                </div>
            </Link>
            
            <Link to="#" className='no-underline text-black'>  
                <div className="grid1-item">
                    <div>
                        <img src={example} alt="" />
                    </div>
                    <div className='p-6'>
                        <h3 className='hover:text-darkOrange'>How i learned flask in one week by building</h3>
                        <p>by Fred, on 14th, april 2019</p>
                    </div>
                </div>
            </Link>
            <Link to="#" className='no-underline text-black'>  
                <div className="grid1-item">
                    <div>
                        <img src={example} alt="" />
                    </div>
                    <div className='p-6'>
                        <h3 className='hover:text-darkOrange'>How i learned flask in one week by building</h3>
                        <p>by Fred, on 14th, april 2019</p>
                    </div>
                </div>
            </Link>
            <Link to="#" className='no-underline text-black'>  
                <div className="grid1-item">
                    <div>
                        <img src={example} alt="" />
                    </div>
                    <div className='p-6'>
                        <h3 className='hover:text-darkOrange'>How i learned flask in one week by building</h3>
                        <p>by Fred, on 14th, april 2019</p>
                    </div>
                </div>
            </Link>
            <Link to="#" className='no-underline text-black'>  
                <div className="grid1-item">
                    <div>
                        <img src={example} alt="" />
                    </div>
                    <div className='p-6'>
                        <h3 className='hover:text-darkOrange'>How i learned flask in one week by building</h3>
                        <p>by Fred, on 14th, april 2019</p>
                    </div>
                </div>
            </Link>
            <Link to="#" className='no-underline text-black'>  
                <div className="grid1-item">
                    <div>
                        <img src={example} alt="" />
                    </div>
                    <div className='p-6'>
                        <h3 className='hover:text-darkOrange'>How i learned flask in one week by building</h3>
                        <p>by Fred, on 14th, april 2019</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogGrid
