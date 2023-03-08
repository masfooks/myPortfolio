import React from "react";
import "./Services.css";
import { FaGreaterThan } from "react-icons/fa";
const Services = () => {
  const ExpData = [
    {
      num: 1,
      skill:
        "Worked as a Spatial Data Specialist on projects related to GIS mapping.",
    },
    { num: 2, skill: "Managed Backend Services and Database Activities." },
    { num: 3, skill: "Assisted in building REST APi's for Internal use." },
    {
      num: 4,
      skill:
        "Familiar with Client and Server-Side Scripting with JavaScript and TypeScript.",
    },
    {
      num: 5,
      skill:
        "Knowledge of complete SDLC, Agile development JIRA ticketing and service now system.",
    },
    {
      num: 6,
      skill:
        "Understanding of various Web Frameworks and Modern Web Technologies.",
    },
  ];

  return (
    <section id="services">
      <h5> What I have Done </h5>
      <h2>&lt; My Experience &gt;</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>&gt;&gt;&gt; Past Works and Practices</h3>
          </div>

          <ul className="service__list">
            {ExpData.map(({ num, skill }) => {
              return (
                <li key={num}>
                  <FaGreaterThan className="service__list-icon" />
                  <p>{skill}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
