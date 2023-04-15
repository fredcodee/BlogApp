import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div div className='bg-brightBlue font-mono'>
            <div className="relative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center pt-2">
                        <h2 className='text-white text-lg font-bold'>@Fredcode 2023. All rights reserved.</h2>
                    </div>
                    <div className="hidden md:flex space-x-10">
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
            </div>
        </div>
    )
}

export default Footer
