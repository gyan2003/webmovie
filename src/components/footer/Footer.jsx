import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'

import {FaInstagram} from 'react-icons/fa'
import {MdOutgoingMail} from 'react-icons/md'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'

import './style.scss'

const Footer = () => {
  return (
   <footer className='footer'>
    <ContentWrapper>
      
    <ul className="menuItems">
      <li className="menuItem">Terms Of Use</li>
      <li className="menuItem">Privacy-Policy</li>
      <li className="menuItem">About</li>
      <li className="menuItem">Blog</li>
      <li className="menuItem">FAQ</li>
    </ul>
      
    <div className="infoText">
     Movix website is a user-friendly platform for movie enthusiasts to discover and explore the world of cinema. With a vast database of movies, TV shows, and related content, users can easily find and learn about films. The website also features user ratings and reviews, recommendations, and a streaming service.
    </div>

      <div className="footer_icons">
       <span className='icon'><FaInstagram/></span>
       <span className='icon'><FiTwitter/></span>
       <span className='icon'><MdOutgoingMail/></span>
       <span className='icon'><AiOutlineLinkedin/></span>
      </div>

    </ContentWrapper>
   </footer>
  )
}

export default Footer