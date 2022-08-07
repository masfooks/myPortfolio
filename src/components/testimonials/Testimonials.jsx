import React from 'react'
import '../../components/testimonials/Testimonials.css'
import IMG1 from '../../assets/IMG1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const dataTest = [
  {
    id: 1,
    clientAvtar: IMG1,
    title: 'name',
    review: "Lorem ipsum dolor sit amdfd dfd dfdfddfdfd fd fddet "
  },
  {
    id: 2,
    clientAvtar: IMG1,
    title: 'name',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing."
  },
  {
    id: 3,
    clientAvtar: IMG1,
    title: 'name',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing."
  }
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Reviw From Clients</h5>
      <h2>&lt; Testimonials &gt;</h2>


      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          dataTest.map(({ id, clientAvtar, title, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={clientAvtar} alt={title} />
                </div>
                <h5 className="client__name">{title}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials