import React from 'react'
import project1 from '../assets/images/project1.jpg'
import project2 from '../assets/images/project2.jpg'
import project3 from '../assets/images/project3.jpg'
import project4 from '../assets/images/project4.jpg'
import projectExample from '../assets/images/example.jpg'

const ProjectCard = ({ image, title, description, demoLink, githubLink }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4">
        {demoLink && (
          <a
            href={demoLink}
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Live Demo
          </a>
        )}
        <a
          href={githubLink}
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

const Projects = () => {
  const projects = [
    {
      image: project3,
      title: "HealthCheck",
      description: "A doctor's appointment SaaS web application, designed to streamline the process of scheduling and managing medical appointments for both patients and healthcare providers. Built with the MERN stack.",
      demoLink: "https://youtu.be/6i9N2oYgq7Y",
      githubLink: "https://github.com/fredcodee/HealthCheck"
    },
    {
      image: project1,
      title: "TeamManagement",
      description: "A platform built for a new way of working and boost your team's alignment, efficiency, and productivity by customizing any workflow to fit your needs.",
      demoLink: "https://teammanagement.netlify.app/",
      githubLink: "https://github.com/fredcodee/TeamManagement"
    },
    {
      image: project4,
      title: "ApplyAssistant-AI",
      description: "Let AI Build your resume and cover letter, customize to the job description you want and keep track of jobs application.",
      githubLink: "https://github.com/fredcodee/ApplyAssistant-AI"
    },
    {
      image: project2,
      title: "Shoplite",
      description: "E-commerce platform that helps creators sell digital products directly to their audience",
      demoLink: "https://shoplite.netlify.app/",
      githubLink: "https://github.com/fredcodee/Shoplite"
    },
    {
      image: projectExample,
      title: "mellow",
      description: "Project management tool and a workflow management app for companies/agencies to start managing their projects while collaborating with their project managers and developers effectively",
      githubLink: "https://github.com/fredcodee/mello"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <p className="text-lg text-blue-600">Browse My Recent</p>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects

