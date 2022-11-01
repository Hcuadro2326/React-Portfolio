import React from 'react'
import './nav.css'
import {RiHomeHeartLine} from 'react-icons/ri'
import {FiUser} from 'react-icons/fi'
import {BsCodeSlash} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
        <a href='#'><RiHomeHeartLine/></a>
        <a href='#about'><FiUser/></a>
        <a href='#experience'><BsCodeSlash/></a>
        <a href='#contact'><AiOutlineMail/></a>
    </nav>
  )
}

export default Nav