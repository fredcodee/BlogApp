import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
        <div className='container w-full grid gap-4 gap-y-8 md:grid-cols-2'>
            <div className="grid1-item">
                <h2 role="text" className="text-5xl md:text-6xl font-medium text-slate-800">
                    Get in touch.
                </h2>
                <div role="text" className="text-center md:text-lg tracking-tight font-normal max-w-[30rem] p-3">
                    I recommend using any of the social media/ avenues below but feel free to fill in the form as well :)
                </div>
                <div className="flex justify-center space-x-4">
                      <Link to="https://twitter.com/fredcode_" className="no-underline">
                          <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" className="my-twitter-icon" />
                      </Link>
                      <Link to="https://github.com/fredcodee" className="no-underline">
                          <FontAwesomeIcon icon={faGithub} size="2x" color="#211F1F" className="my-github-icon" />
                      </Link>
                      <Link to="https://www.linkedin.com/in/wilfred-chukwu-891830174/" className="no-underline">
                          <FontAwesomeIcon icon={faLinkedin} size="2x" color="#1DA1F2" className="my-linkedin-icon" />
                      </Link>
                      <Link to="mailto:wilfredchukwu1@gmail.com" className="no-underline">
                          <FontAwesomeIcon icon={faEnvelope} size="2x" color="#D44638" className="my-gmail-icon" />
                      </Link>
                </div>
            </div>
            <div className="grid1-item">
                <form method="post" action="mailto:wilfredchukwu1@gmail.com" encType="text/plain"  style={{width:'100%'}}>
                    <div className="relative z-0 w-full mb-5">
                    <label htmlFor="name" className="absolute duration-300 left-4 top-1 z-10 origin-0 text-gray-600 pointer-events-none">What is your name?*</label>
                        <input type="text" name="name" id="name" className="pt-6 pb-3 px-4 bg-white block w-full mt-0 border appearance-none focus:outline-none focus:ring-0 rounded focus:border-primary-800 border-gray-400"  fdprocessedid="wz8w3mj"/>
                           
                    </div>
                    <div className="relative z-0 w-full mb-5">
                    <label htmlFor="email" className="absolute duration-300 left-4 top-1 z-10 origin-0 text-gray-600 pointer-events-none">What is your email?*</label>
                        <input type="email" name="email" id="email" className="pt-6 pb-3 px-4 bg-white block w-full mt-0 border appearance-none focus:outline-none focus:ring-0 rounded focus:border-primary-800 border-gray-400" fdprocessedid="d72v06"/>
                           
                    </div>
                    <div className="relative z-0 w-full mb-5">
                    <label htmlFor="message" className="absolute duration-300 left-4 top-1 z-10 origin-0 text-gray-600 pointer-events-none">What do you want to talk about?*</label>
                        <textarea name="message" id="message" className="pt-6 pb-4 px-4 bg-white block w-full mt-0 border appearance-none focus:outline-none focus:ring-0 rounded focus:border-primary-800 border-gray-400" rows="3"></textarea>
                    </div>
                    <button className="flex flex-wrap items-center gap-2 group tracking-tight font-medium cursor-pointer rounded-lg px-6 py-3 text-lg bg-blue-400 text-primary-50 hover:bg-primary-800 w-full justify-center mt-8" type='submit'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="transition-transform h-7 w-7 order-last group-hover:translate-x-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"></path>
                        </svg>
                        <span>Send</span>
                    </button>
                </form>
            </div>
              
        </div>
        <hr className='container mb-20'/>
      <Footer/>
    </div>
  )
}

export default Contact
