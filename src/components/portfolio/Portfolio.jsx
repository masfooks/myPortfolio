import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/react-redux-dashboard.png";
import IMG2 from "../../assets/advweb1.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "React-Redux Dashboard",
    github: "https://github.com/masfooks/reactredux-dashboard",
    demo: "https://dashboard-frontend-qmu0.onrender.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Landing Page Pure HTML/CSS",
    github: "https://github.com/masfooks/Adventuretourweb.github.io",
    demo: "https://adventuretourweb.vercel.app/#",
  },
  {
    id: 3,
    image: IMG1,
    title: "The Title 2",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Projects and Links</h5>
      <h2>&lt; Projects &gt;</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article
              key={id}
              className="portfolio__item"
              style={{ maxWidth: "350px" }}
            >
              <div className="portfolio_item-image">
                <img className="p_image" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
