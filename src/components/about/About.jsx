import React from 'react'
import './About.css'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/ME1.png'
// import {Fiusers} from 'react-icons/fi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>&lt; About Me &gt;</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>1+ Year Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h4>Projects</h4>
              <small>1+ Year Working</small>
            </article>

          </div>
          <p>&gt;&gt;&gt; Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur qui officiis fuga, placeat atque? Doloremque, numquam accusamus eaque provident blanditiis esse a mollitia at dolorem praesentium ipsam, accusantium temporibus.</p>

          <a href="#contact" className="#contact btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About