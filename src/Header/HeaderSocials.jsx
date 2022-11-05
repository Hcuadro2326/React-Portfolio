import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='socials'>
        <a href="http://linkedin.com" targer="blank"><BsLinkedin/></a>
        <a href="http://github.com" targer="blank"><BsGithub/></a>
        <a href="http://facebook.com" targer="blank"><BsFacebook/></a>
        

    </div>
  )
}

export default HeaderSocials