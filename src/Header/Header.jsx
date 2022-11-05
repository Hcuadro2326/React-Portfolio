import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello My Name Is</h5>
        <h1>Hector Cuadro</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
      </div>
    </header>
  )
}

export default Header