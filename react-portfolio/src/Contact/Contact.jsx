import React from 'react'
import './contact.css'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {GiRotaryPhone} from 'react-icons/gi'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Leave Me A</h5>
      <h3>Message</h3>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineAlternateEmail/>
            <h4>Email</h4>
            <h5>cuadro.bebo2326@gmail.com</h5>
            <a href='mailto:cuadro.bebo2326@gmail.com'>Email me</a>
          </article>
          <article className='contact_option'>
            <GiRotaryPhone/>
            <h4>Phone Number</h4>
            <h5>915-538-5442</h5>
            <a href='tel:+9155385442'>Call me </a>
          </article>

        </div>
        <form action=''>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message'rows='7' placeholder='Your Message Here' required></textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>

  )
}

export default Contact