import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontData = [
    { skill: "ReactJS", lev: "Intermediate" },
    { skill: "BootStrap", lev: "Experienced" },
    { skill: "Material UI", lev: "Intermediate" },
    { skill: "HTML5", lev: "Experienced" },
    { skill: "CSS3", lev: "Experienced" },
    { skill: "Redux", lev: "Intermediate" },
  ];
  const backData = [
    { skill: "Node JS", lev: "Experienced" },
    { skill: "MongoDB", lev: "Experienced" },
    { skill: "TypeScript", lev: "Intermediate" },
    { skill: "MySQL", lev: "Intermediate" },
    { skill: "Express JS", lev: "Experienced" },
    { skill: "REST Api", lev: "Experienced" },
  ];

  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>&lt; Skills and Abilities &gt;</h2>

      <div className="container experience__container">
        {/* Frontend Experience */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontData.map(({ skill, lev }) => {
              return (
                <article key={skill} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{lev}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Backend Ecperience */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backData.map(({ skill, lev }) => {
              return (
                <article key={skill} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{lev}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
