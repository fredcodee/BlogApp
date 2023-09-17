import React from 'react'
import Resume from '../assets/files/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import aboutMeImg from '../assets/images/aboutme.jpg'

const Home = () => {
  //go to different website
  //window.location.href = "https://www.google.com"

  return (
    <div className='container'>
      <div className='text-center p-5'>
        <section id="intro" className='pb-5 pt-5'>
          <div className="inner">
            <div>
              <p className='font-bold text-slate-500'>Hello, I'm</p>
              <p className='text-5xl font-bold'>Wilfred Chukwu</p>
              <p className='text-3xl text-slate-500'>Software Engineer </p>
              <div>
                <a href={Resume} download className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Download Resume</a>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-400 dark:focus:ring-gray-700 dark:border-gray-700">Contact Me</button>
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <a href="https://www.linkedin.com/in/wilfred-chukwu-891830174/" className='text-3xl'><FontAwesomeIcon icon={faLinkedin} style={{ color: "#1e1e1f" }} /></a>
                <a href="https://github.com/fredcodee" className='text-3xl'><FontAwesomeIcon icon={faGithub} style={{ color: "#212121" }} /></a>
              </div>
            </div>
            <a href="#main" className="more text-stone-50 hover:text-white ">View My Projects</a>

          </div>
        </section>
      </div>


      <div className='pt-5'>
        <section id='About' className='pb-5'>
          <div className='text-center pt-4 pb-5'>
            <p>Get to know more</p>
            <h1 className='font-bold'>About Me</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-5">
            <div className="...">
              <img src={aboutMeImg} alt="image" className='rounded-lg' />
            </div>
            <div className="col-span-2 ..." style={{justifyContent: 'center', alignItems:'center', alignContent:'center'}}>
              <div className="grid grid-cols-2 gap-4 text-center pt-5">
                <div className="...">
                  <div className='border-solid'>
                    <p>I'm a Software Engineer and I have developed scalable, secure and object-oriented web applications, with a focus on efficient algorithm usage and optimal database structures. I'm confident, naturally curious, and perpetually working on improving my skills, mindset and growth.</p>
                  </div>
                </div>
                <div className="...">
                  <div className='border-solid'>
                    <p className='font-bold'>Experience</p>
                    <p>4+ years <br /><span>Software Engineer</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>


      <div>
        <section id='experience' className='pb-5'>
          <div className='text-center pt-4 pb-5'>
            <p>Explore My</p>
            <h1 className='font-bold'>Experience</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center pt-5">
            <div className="...">
              <div className='border-solid border-2 border-gray-500 rounded-lg p-4'>
                <h3 className='text-slate-500'>Frontend Development</h3>
                <div className="grid grid-cols-3 gap-4 text-center pt-5">
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>HTML</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>Css</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>Sass</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>Tailwind & Boostrap</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>Javascript</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>React</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="...">
              <div className='border-solid border-2 border-gray-500 rounded-lg p-4'>
                <h3 className='text-slate-500'>Backend Development</h3>
                <div className="grid grid-cols-3 gap-4 text-center pt-5">
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>MongoDb</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>PostgreSQL</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>Node Js</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>Express Js</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>Django</p>
                  </div>
                  <div className="...">
                    <p><span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#0f0f0f",}}  className='pr-2'/></span>Git</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>

      <div className='pt-5'>
        <section id='projects'>
        <div className='text-center pt-4 pb-5'>
            <p>Browse My Recent</p>
            <h1 className='font-bold'>Projects</h1>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
