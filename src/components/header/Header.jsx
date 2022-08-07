import React from 'react'
import './Header.css'
import CTA from './CTA'
// import $ from 'jquery'
import ME from '../../assets/ME2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h4>Hello I'm, </h4>
                <h1>&lt; Mayuresh Chavan &gt;</h1>
                <h5 className="text-light">Web Devloper, Programmer, and more...</h5>
                <CTA />

                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>

            </div>
        </header>
    )
}

export default Header