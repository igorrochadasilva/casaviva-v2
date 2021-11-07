import React, { useState } from 'react'
import Slider from 'react-slick'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import '../../../assets/scss/pages/Ficha/index.scss';

//components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Simular from '../../components/Simulador/index'
import McmvSection from '../../components/McmvSection/index'


const Ficha = ({ match }) => {

    const idPage = match.params.id;

    const images = [
        'https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/fachada.png',
        'https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/salao_de_festasx.png',
        'https://i.imgur.com/hlrFa7I.jpg',
        'https://i.imgur.com/gjxrL36.jpg',
        'https://i.imgur.com/XdAwI76.jpg',
    ];

    const [set, setSettings] = useState({
        photoIndex: 0,
        isOpen: false,
    });

    const slickOptionsGalery = {
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots crslDots',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const slickOptions = {
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots crslDots',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div>
            <Header />
            <div
                id={`page-ficha-${idPage}`}
                className="ficha-empreendimento"
            >
                <div id="galery" className="hidden-xs-only">
                    <div className="vertical">
                        <img

                            src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/fachada.png"
                            alt="Fachada"
                        />
                    </div>
                    <div className="horizontal">
                        <img

                            src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/salao_de_festasx.png"
                            alt="Salão de Festas"
                        />
                        <img

                            src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/academia.png"
                            alt="Academia"
                        />
                    </div>
                    <div className="wrapButton" onClick={() => setSettings({ isOpen: true, photoIndex: 0 })}>
                        <a className="btn btn-primary-white" >
                            Ver Todas Fotos
                        </a>
                    </div>
                </div>
                <div id="galeryMobile" className="hidden-sm-and-up">
                    <Slider {...slickOptionsGalery}>
                        <div>
                            <div>
                                <div className="item">
                                    <img
                                        src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/fachada.png"
                                        alt="Fachada"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="item">
                                    <img
                                        src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/salao_de_festasx.png"
                                        alt="Salão de Festas"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="item">
                                    <img
                                        src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/academia.png"
                                        alt="Academia"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className="wrapButton">
                        <a className="btn btn-primary-white">
                            Ver Todas Fotos
                        </a>
                    </div>
                </div>
                <section id="descriptionSection">
                    <div className="container_app">
                        <h1>CasaViva Morumbi</h1>
                        <div

                            className="st el-row is-justify-center is-align-middle el-row--flex"
                        >
                            <div className="el-col el-col-24 el-col-sm-12" xd="24">
                                <p>
                                    Morar a 4 minutos do Estádio do Morumbi e a 7 minutos da estação São
                                    Paulo – Morumbi são algumas das facilidades para seu dia a dia. Além
                                    de localizado em uma região premium da zona sul, o lazer é
                                    incomparável: piscina adulto e infantil, salão de festas, quadra,
                                    academia, playground, churrasqueira e muito mais! CasaViva Morumbi.
                                    <br />
                                    É para a vida, é para sempre, é para você.
                                </p>
                            </div>
                            <div className="el-col el-col-24 el-col-sm-12" xd="24">
                                <img

                                    src="https://casavivamorumbi.com.br/images/logo/logo-casa-viva_2x.png"
                                    alt="Logo Empreendimento"
                                />
                            </div>
                        </div>
                        <div className="nd el-row el-row--flex">
                            <div

                                className="el-col el-col-24 el-col-xs-12 el-col-sm-5"
                            >
                                <div className="item">
                                    <i className="specs-icon spec-grana"></i>
                                    <div>
                                        <h6>A partir de</h6>
                                        <h4>199 mil</h4>
                                    </div>
                                </div>
                            </div>
                            <div

                                className="el-col el-col-24 el-col-xs-12 el-col-sm-5"
                            >
                                <div className="item">
                                    <i className="specs-icon spec-quarto"></i>
                                    <div>
                                        <h6>Dormitórios</h6>
                                        <h4>1 ou 2</h4>
                                    </div>
                                </div>
                            </div>
                            <div

                                className="el-col el-col-24 el-col-xs-12 el-col-sm-5"
                            >
                                <div className="item">
                                    <i className="specs-icon spec-banheiro"></i>
                                    <div>
                                        <h6>Banheiros</h6>
                                        <h4>1</h4>
                                    </div>
                                </div>
                            </div>
                            <div

                                className="el-col el-col-24 el-col-xs-12 el-col-sm-5"
                            >
                                <div className="item">
                                    <i className="specs-icon spec-torre"></i>
                                    <div>
                                        <h6>Torres</h6>
                                        <h4>2</h4>
                                    </div>
                                </div>
                            </div>
                            <div

                                className="el-col el-col-24 el-col-xs-12 el-col-sm-5"
                            >
                                <div className="item">
                                    <i className="specs-icon spec-carro"></i>
                                    <div>
                                        <h6>Vagas</h6>
                                        <h4>1</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sectionSeparator container_app st">
                    <hr />
                </div>
                <section id="tourSection">
                    <div className="wrapper">
                        <div className="container_app">
                            <iframe

                                src="https://casavivamorumbi.com.br/tour/morumbi/tour.html"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="container_app"></div>
                </section>
                <div className="sectionSeparator container_app nd">
                    <hr />
                </div>
                <section id="caracteristics">
                    <div className="container_app">
                        <div className="el-row">
                            <div

                                className="el-col el-col-24 el-col-xs-24 el-col-sm-4"
                            >
                                <h3>
                                    <small>
                                        Diferenciais feitos com carinho para você.
                                    </small>
                                </h3>
                            </div>
                            <div

                                className="list el-col el-col-24 el-col-offset-1 el-col-xs-24 el-col-sm-19"
                            >
                                <div className="el-row">
                                    <div

                                        className="item el-col el-col-24 el-col-xs-12 el-col-sm-6"
                                    >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="cv-iconx cv-shield"></i>
                                                    </td>
                                                    <td>
                                                        <h4>Segurança</h4>
                                                        <p>Portaria com guarita blindada.</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div

                                        className="item el-col el-col-24 el-col-xs-12 el-col-sm-6"
                                    >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="cv-iconx cv-link"></i>
                                                    </td>
                                                    <td>
                                                        <h4>Conectividade</h4>
                                                        <p>
                                                            Pontos para câmera ou otimização do wifi.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div

                                        className="item el-col el-col-24 el-col-xs-12 el-col-sm-6"
                                    >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="cv-iconx cv-usb"></i>
                                                    </td>
                                                    <td>
                                                        <h4>Praticidade</h4>
                                                        <p>
                                                            Tomadas USB na sala e nos quartos.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div

                                        className="item el-col el-col-24 el-col-xs-12 el-col-sm-6"
                                    >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="cv-iconx cv-vase"></i>
                                                    </td>
                                                    <td>
                                                        <h4>Estrutura</h4>
                                                        <p>
                                                            Áreas comuns equipadas e decoradas.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div

                                        className="item el-col el-col-24 el-col-xs-12 el-col-sm-6"
                                    >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="cv-iconx cv-phone"></i>
                                                    </td>
                                                    <td>
                                                        <h4>Tecnologia</h4>
                                                        <p>
                                                            Academia com tecnologia FitAnyWhere
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div

                                        className="item el-col el-col-24 el-col-xs-12 el-col-sm-6"
                                    >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="cv-iconx cv-washer"></i>
                                                    </td>
                                                    <td>
                                                        <h4>Higiene</h4>
                                                        <p>
                                                            Lavanderia com máquinas profissionais.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div

                                        className="item el-col el-col-24 el-col-xs-12 el-col-sm-6"
                                    >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="cv-iconx cv-bike"></i>
                                                    </td>
                                                    <td>
                                                        <h4>Mobilidade</h4>
                                                        <p>
                                                            Bicicletário com bicicletas entregues.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div

                                        className="item el-col el-col-24 el-col-xs-12 el-col-sm-6"
                                    >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="cv-iconx cv-car"></i>
                                                    </td>
                                                    <td>
                                                        <h4>Free car</h4>
                                                        <p>
                                                            Vaga para futura instalação de carro compartilhado.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sectionSeparator container_app rd">
                    <hr />
                </div>
                <section id="plantas">
                    <div className="container_app">
                        <h2>Tipos de Planta</h2>
                        <Slider {...slickOptions}>
                            <div>
                                <div className="item">
                                    <img


                                        src="https://cdncasaviva.sfo2.digitaloceanspaces.com/public/implantacao.jpg"
                                        alt="Implantação"
                                    />
                                    <p>
                                        Implantação
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <img


                                        src="https://i.imgur.com/4PeZuDw.png"
                                        alt="Planta do apartamento na versão 2 quartos"
                                    />
                                    <p>
                                        2 Quartos com abertura para suíte
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <img


                                        src="https://i.imgur.com/Cj5ZXob.png"
                                        alt="Planta do apartamento na versão 1 quarto com sala ampliada"
                                    />
                                    <p>
                                        1 Quarto com sala ampliada
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <img


                                        src="https://i.imgur.com/DpLzmVA.png"
                                        alt="Planta do apartamento na versão 2 quartos"
                                    />
                                    <p>
                                        2 quartos
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <img


                                        src="https://cdncasaviva.sfo2.digitaloceanspaces.com/public/implantacao.jpg"
                                        alt="Implantação"
                                    />
                                    <p>
                                        Implantação
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <img


                                        src="https://i.imgur.com/4PeZuDw.png"
                                        alt="Planta do apartamento na versão 2 quartos"
                                    />
                                    <p>
                                        2 Quartos com abertura para suíte
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <img


                                        src="https://i.imgur.com/Cj5ZXob.png"
                                        alt="Planta do apartamento na versão 1 quarto com sala ampliada"
                                    />
                                    <p>
                                        1 Quarto com sala ampliada
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <img


                                        src="https://i.imgur.com/DpLzmVA.png"
                                        alt="Planta do apartamento na versão 2 quartos"
                                    />
                                    <p>
                                        2 quartos
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <img


                                        src="https://cdncasaviva.sfo2.digitaloceanspaces.com/public/implantacao.jpg"
                                        alt="Implantação"
                                    />
                                    <p>
                                        Implantação
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>
                <div className="sectionSeparator container_app th1">
                    <hr />
                </div>
                <section id="location">
                    <div className="container_app">
                        <h2>Localização</h2>
                        <div className="el-row">
                            <div

                                className="el-col el-col-24 el-col-xs-24 el-col-sm-12"
                            >
                                <p>
                                    Morar no Morumbi traz inúmeras vantagens. Além de comércios e
                                    serviços de qualidade incomparáveis, conta com a facilidade de
                                    acesso pela Av. Giovanni Gronchi, que está a 100 m do CasaViva
                                    Morumbi.
                                </p>
                            </div>
                            <div

                                className="el-col el-col-24 el-col-xs-24 el-col-sm-12"
                            ></div>
                        </div>
                    </div>
                </section>
                <div className="sectionSeparator container_app th2">
                    <hr />
                </div>
                <section id="addressSection">
                    <div className="container_app">
                        <h2>Endereço</h2>
                        <div className="el-row is-align-middle el-row--flex">
                            <div

                                className="el-col el-col-24 el-col-xs-24 el-col-sm-12"
                            >
                                <div className="item">
                                    <h4>Central de vendas</h4>
                                    <ul>
                                        <li>Avenida Giovanni Gronchi, 7020</li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <h4>Empreendimento</h4>
                                    <ul>
                                        <li>Rua Clementine Brenne, 377</li>
                                    </ul>
                                </div>
                            </div>
                            <div

                                className="el-col el-col-24 el-col-xs-24 el-col-sm-12"
                            >
                                <iframe

                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14623.91111860068!2d-46.72858878032222!3d-23.60512983935988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56c609480309%3A0x9659ad62c85a6bbb!2sRua%20Clementine%20Brenne%2C%20377%20-%20Parais%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005659-000!5e0!3m2!1spt-BR!2sbr!4v1594898827200!5m2!1spt-BR!2sbr"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <McmvSection />
                <Simular />
            </div>
            <Footer />


            {set.isOpen && (
                <Lightbox
                    mainSrc={images[set.photoIndex]}
                    nextSrc={images[(set.photoIndex + 1) % images.length]}
                    prevSrc={images[(set.photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setSettings({ isOpen: false })}
                    onMovePrevRequest={() =>
                        setSettings({
                            photoIndex: (set.photoIndex + images.length - 1) % images.length,
                            isOpen: true
                        })
                    }
                    onMoveNextRequest={() =>
                        setSettings({
                            photoIndex: (set.photoIndex + 1) % images.length,
                            isOpen: true
                        })
                    }
                />
            )}
        </div>
    )
}

export default Ficha