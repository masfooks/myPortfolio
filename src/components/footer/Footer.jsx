import React from 'react'
import './Footer.css'

import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Mayuresh</a>

      <ul className="permalinks">
        <li><a href='#' rel='noreferrer'>Home</a></li>
        <li><a href="#about" rel='noreferrer'>About</a></li>
        <li><a href="#experience" rel='noreferrer'>Experience</a></li>
        <li><a href="#services" rel='noreferrer'>Services</a></li>
        <li><a href="#portfolio" rel='noreferrer'>Portfolio</a></li>
        <li><a href="#testimonials" rel='noreferrer'>Testimonials</a></li>
        <li><a href="#contact" rel='noreferrer'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://github.com"><BsGithub /></a>
        <a href="https://instagram.com"><FaInstagramSquare /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mayuresh. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer