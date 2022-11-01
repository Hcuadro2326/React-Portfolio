import React from 'react'
import './about.css'
import ME from '../assets/pumpkin_patch.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Here's a little</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='image'>
            <img src={ME} alt="about-image" />
          </div>
        </div>

          <div className='about_me_paragraph'>
            <article>Performance-driven Web Developer motivated to meet all web-based needs. Assisted in development and testing of mobile and web-based applications. Consistently recognized for dependability and multi-tasking skills. Proficient with HTML, CSS, Git, JavaScript, Web API's, Node.JS, OOP, Express.JS, MySQL, NoSQL, React.</article>
          </div>

        </div>
    </section>  
  )
}

export default About