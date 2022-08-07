import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The Title 1',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG1,
    title: 'The Title 2',
    github: 'https://github.com',
    demo: 'https://github.com',
  }
  ,
  {
    id: 3,
    image: IMG1,
    title: 'The Title 2',
    github: 'https://github.com',
    demo: 'https://github.com',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>&lt; Portfolio &gt;</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target='_blank' rel="noreferrer" className="btn btn-primary">GitHub</a>
                  <a href={demo} target='_blank' rel="noreferrer" className="btn btn-primary">GitHub</a>
                </div>
              </article>
            )
          })
        }




      </div>
    </section>
  )
}

export default Portfolio