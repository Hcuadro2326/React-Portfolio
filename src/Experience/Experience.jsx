import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {AiFillApi} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Experience</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillHtml5/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience_details">
              <FaCss3Alt/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience_details">
              <DiJavascript/>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <BsBootstrapFill/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience_details">
              <FaReact/>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Experience</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaNodeJs/>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <GrMysql/>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <SiMongodb/>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>NoSQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <AiFillApi/>
              <h4>API's</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience