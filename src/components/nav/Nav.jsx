import React from 'react'
import './Nav.css'
import {ImUser,ImBooks} from 'react-icons/im'
import {IoIosHome} from 'react-icons/io'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactMail} from 'react-icons/md'

import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/#" onClick={()=> setActiveNav('/#')} className={activeNav === '#'?'active':''}><IoIosHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about'?'active':''}><ImUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience'?'active':''}><ImBooks /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav ==='#services'?'active':''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact'?'active':''}><MdContactMail /></a>
    </nav>
  )
}

export default Nav