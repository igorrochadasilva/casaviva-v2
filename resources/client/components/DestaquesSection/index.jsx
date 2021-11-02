import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../../assets/scss/components/DestaquesSection/index.scss';

const DestaquesSection = (props) => {
    var settingsSlick = {
        arrows: false,
        dots: true,
        dotsclassName: 'slick-dots crslDots',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <section className="destaquesSection">
            <div className="container_app">
                <h2>{props.sectionTitle}</h2>
                <Slider {...settingsSlick}>
                    <div tabindex="-1" className="item" data-v-e4caeaf8="" data-v-70282062="">
                        <div type-box="home" className="boxEmpreendimento" data-v-6b1bf838="" data-v-70282062="" data-v-e4caeaf8="">
                            <a href="/ficha/casaviva-morumbi" data-v-6b1bf838="" className="">
                                <picture data-v-6b1bf838="">
                                    <source media="(max-width: 767px)" srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_piscina.png" data-v-6b1bf838="" />
                                    <source srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_piscina.png" data-v-6b1bf838="" />
                                    <img src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_piscina.png" alt="Imagem do empreendimento CasaViva Morumbi - Uma piscina" className="img-fluid" data-v-6b1bf838="" />
                                </picture>
                                <div className="content" data-v-6b1bf838="">
                                    <h3 data-v-6b1bf838="">CasaViva Morumbi</h3>
                                    <ul data-v-6b1bf838="">
                                        <li data-v-6b1bf838="">
                                            <i className="cv-icons cv-price" data-v-6b1bf838=""></i>
                                            <span data-v-6b1bf838="">
                                                A partir de R$ 199 mil
                                            </span>
                                        </li>
                                        <li data-v-6b1bf838="">
                                            <i className="cv-icons cv-beds" data-v-6b1bf838=""></i>
                                            <span data-v-6b1bf838="">
                                                2 dormitórios
                                            </span>
                                        </li>
                                        <li data-v-6b1bf838="">
                                            <i className="cv-icons cv-location-mark" data-v-6b1bf838=""></i>
                                            <span data-v-6b1bf838="">
                                                4 minutos do metrô SP - Morumbi
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div tabindex="-1" className="item" data-v-e4caeaf8="" data-v-70282062="">
                        <div type-box="home" className="boxEmpreendimento" data-v-6b1bf838="" data-v-70282062="" data-v-e4caeaf8="">
                            <a href="/ficha/lyne-pirituba" data-v-6b1bf838="" className="">
                                <picture data-v-6b1bf838="">
                                    <source media="(max-width: 767px)" srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_desk_mobile.png" data-v-6b1bf838="" />
                                    <source srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_desk_mobile.png" data-v-6b1bf838="" />
                                    <img src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/thumb_desk_mobile.png" alt="Imagem do empreendimento CasaViva Pirituba - Uma piscina" className="img-fluid" data-v-6b1bf838="" />
                                </picture>
                                <div className="content" data-v-6b1bf838="">
                                    <h3 data-v-6b1bf838="">Lyne Pirituba</h3>
                                    <ul data-v-6b1bf838="">
                                        <li data-v-6b1bf838="">
                                            <i className="cv-icons cv-beds" data-v-6b1bf838=""></i>
                                            <span data-v-6b1bf838="">
                                                2 dorms com ou sem varanda
                                            </span>
                                        </li>
                                        <li data-v-6b1bf838="">
                                            <i className="cv-icons cv-location-mark" data-v-6b1bf838=""></i>
                                            <span data-v-6b1bf838="">
                                                Em frente a estação Pirituba
                                            </span>
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
