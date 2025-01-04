import React from 'react'
import aboutMeImg from '../assets/images/aboutme.jpg'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="text-center mb-12">
        <p className="text-lg text-blue-600">Get to know more</p>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <img src={aboutMeImg} alt="About me" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="md:col-span-2 space-y-6">
          <p className="text-gray-600 leading-relaxed">
            I am a dedicated Software Engineer with a proven track record of designing and developing scalable, secure, and object-oriented web applications. My core expertise lies in crafting efficient algorithms and implementing optimal database structures to deliver high-performance solutions. My professional journey is characterized by a relentless pursuit of excellence, marked by unwavering confidence, innate curiosity, and a commitment to continuous self-improvement. I thrive on challenges, constantly broadening my skill set, nurturing a growth mindset, and striving for innovation in every project I undertake.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
            <p className="text-gray-600">
              7+ years <br />
              <span className="font-medium">Software Engineer</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

