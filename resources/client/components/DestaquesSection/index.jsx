import React from 'react'
import Slider from 'react-slick'
import '../../../assets/scss/components/DestaquesSection/index.scss'

const DestaquesSection = (props) => {
  const settings = {
    arrows: false,
    dots: true,
    dotsclassName: 'slick-dots crslDots',
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="destaquesSection">
      <div className="container_app">
        <h2>{props.sectionTitle}</h2>
        <Slider {...settings}>
          <div className="item">
            <div type-box="home" className="boxEmpreendimento">
              <a href="/ficha/casaviva-morumbi" className="">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_piscina.png"
                  />
                  <source srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_piscina.png" />
                  <img
                    src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_piscina.png"
                    alt="Imagem do empreendimento CasaViva Morumbi - Uma piscina"
                    className="img-fluid"
                  />
                </picture>
                <div className="content">
                  <h3>CasaViva Morumbi</h3>
                  <ul>
                    <li>
                      <i className="cv-icons cv-price"></i>
                      <span>A partir de R$ 199 mil</span>
                    </li>
                    <li>
                      <i className="cv-icons cv-beds"></i>
                      <span>2 dormitórios</span>
                    </li>
                    <li>
                      <i className="cv-icons cv-location-mark"></i>
                      <span>4 minutos do metrô SP - Morumbi</span>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div className="item">
            <div type-box="home" className="boxEmpreendimento">
              <a href="/ficha/lyne-pirituba" className="">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_desk_mobile.png"
                  />
                  <source srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_desk_mobile.png" />
                  <img
                    src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_desk_mobile.png"
                    alt="Imagem do empreendimento CasaViva Pirituba - Uma piscina"
                    className="img-fluid"
                  />
                </picture>
                <div className="content">
                  <h3>Lyne Pirituba</h3>
                  <ul>
                    <li>
                      <i className="cv-icons cv-beds"></i>
                      <span>2 dorms com ou sem varanda</span>
                    </li>
                    <li>
                      <i className="cv-icons cv-location-mark"></i>
                      <span>Em frente a estação Pirituba</span>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default DestaquesSection
