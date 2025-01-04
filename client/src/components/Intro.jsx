import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Resume from '../assets/files/resume.pdf'

const Intro = () => {
  return (
    <section id="intro" className="py-20 text-center">
      <div className="space-y-4">
        <p className="text-lg font-semibold text-blue-600">Hello, I'm</p>
        <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">Wilfred Chukwu</h1>
        <p className="text-2xl text-gray-600 sm:text-3xl">Software Engineer</p>
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href={Resume}
            download
            className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Download Resume
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Me
          </a>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/wilfred-chukwu-891830174/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
          <a href="https://github.com/fredcodee" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
        </div>
      </div>
      <a href="#projects" className="inline-block mt-12 text-blue-600 hover:text-blue-800">
        View My Projects
      </a>
    </section>
  )
}

export default Intro

