import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/ME1.png";
// import {Fiusers} from 'react-icons/fi'
const About = () => {
  return (
    <section id="about">
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
              <small>1.5+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h4>Projects</h4>
              <small>Scroll Down ↓ </small>
            </article>
          </div>
          <p>
            &gt;&gt;&gt; Enthusiastic Web Developer, task-driven professional
            with 1.5+ years of experience in Visual Data Analysis and Backend
            Development.
            <br />
            To kickstart a new journey as a Web developer, I’m looking for a
            challenging role to use my skills towards organizations growth and
            success alongside my own Career.
          </p>

          <a href="#contact" className="#contact btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
