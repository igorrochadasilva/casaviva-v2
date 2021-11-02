import React from 'react'

import Slider from 'react-slick'

const NossoTime = ({ time }) => {
  const settings = {
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots crslDots',
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 3,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  }

  return (
    <section id="our-team">
      <h2 className="container_app">Nosso Time</h2>
      <Slider {...settings}>
        {time.equipe.map((func, index) => (
          <div v-for="item in pageData.team" key={index} className="item">
            <img src={func.avatar} alt={`Foto de ${func.name}`} />
            <div>
              <h4>{func.name}</h4>
              <p>{func.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default NossoTime
