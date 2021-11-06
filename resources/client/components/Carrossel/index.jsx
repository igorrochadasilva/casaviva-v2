import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import '../../../assets/scss/components/Carrossel/index.scss'
import BannerEmpreendimento from '../../components/BannerEmpreendimento'
import BannerInstitucional from '../../components/BannerInstitucional'

const Carousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots crslDots',
    edgeFriction: 0.35,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <section id="section-carousel">
      <Slider {...settings}>
        <div className="item" >
          <BannerEmpreendimento />
        </div>
        <div className="item" >
          <BannerEmpreendimento />
        </div>
        <div className="item" >
          <BannerInstitucional />
        </div>
      </Slider>
    </section>
  );
}

export default Carousel
