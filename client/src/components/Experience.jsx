import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const ExperienceCard = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center">
          <FontAwesomeIcon icon={faCircleCheck} className="text-blue-500 mr-2" />
          <span className="text-gray-600">{skill}</span>
        </div>
      ))}
    </div>
  </div>
)

const Experience = () => {
  const frontendSkills = ['HTML', 'CSS', 'Sass', 'Tailwind & Bootstrap', 'JavaScript', 'React', 'TypeScript']
  const backendSkills = ['Django', 'Node.js', 'PostgreSQL/MySQL', 'MongoDB', 'Express.js', 'Git', 'AWS']

  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-12">
        <p className="text-lg text-blue-600">Explore My</p>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Experience</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ExperienceCard title="Frontend Development" skills={frontendSkills} />
        <ExperienceCard title="Backend Development" skills={backendSkills} />
      </div>
    </section>
  )
}

export default Experience

