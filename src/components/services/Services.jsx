import React from 'react'
import './Services.css'
import {FaGreaterThan} from 'react-icons/fa'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>&lt; Services &gt;</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>&gt;&gt;&gt; UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaGreaterThan className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaGreaterThan className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaGreaterThan className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaGreaterThan className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaGreaterThan className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services