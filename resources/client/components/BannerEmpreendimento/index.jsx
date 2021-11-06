import React from 'react'
import '../../../assets/scss/components/BannerEmpreendimento/index.scss';

const BannerEmpreendimento = () => {
  return (
    <div className="BannerEmpreendimento">
      <picture>
        <source media="(max-width: 767px)" srcSet="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/874950a.jpg" />
        <source srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/banner_lyne.png" />
        <img src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/banner_lyne.png" alt="Banner do empreendimento Lyne Pirituba" className="img-fluid" />
      </picture>
      <div className="wrap-container">
        <div className="container_app">
          <div className="titleWrapper"></div>
          <div className="action">
            <ul>
              <li>
                <h1>Breve Lançamento: Lyne Pirituba</h1>
              </li>
              <li>
                <i className="cv-icons cv-beds"></i>
                <span>2 dorms</span>
              </li>
              <li>
                <i className="cv-icons cv-location-mark"></i>
                <span>Em frente a estação Pirituba da CPTM</span>
              </li>
            </ul>
            <a href="/ficha/lyne-pirituba" className="btn btn-primary-white">
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerEmpreendimento
