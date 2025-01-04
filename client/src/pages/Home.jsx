import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
export default Home

