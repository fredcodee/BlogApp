import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-12">
        <p className="text-lg text-blue-600">Get In Touch</p>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Me</h2>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-4" />
            <a href="mailto:wilfredchukwu1@gmail.com" className="text-gray-600 hover:text-blue-500">
              wilfredchukwu1@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 mr-4" />
            <a
              href="https://www.linkedin.com/in/wilfred-chukwu-891830174/"
              className="text-gray-600 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

