import React from 'react';
import '../../../assets/scss/components/SobreCasaViva/index.scss';


const SobreCasaViva = () => {
    return (
        <section id="sobreCasaViva">
            <picture>
                <source media="(max-width: 767px)" srcSet="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/84c2f29.jpg" />
                <source srcSet="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/sobre_casaviva.jpg" />
                <img src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/sobre_casaviva.jpg" alt="Homem sorrindo de frente para o computador ao adquirir sua casa
            nova pela CasaViva" className="img-fluid" />
            </picture>
            <div className="wrap-container">
                <div className="container_app">
                    <div className="el-row is-justify-center is-align-middle el-row--flex">
                        <div className="st el-col el-col-24 el-col-xs-24 el-col-sm-12">
                            <img width="435" height="185" src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/e47defb.svg" alt="Logo CasaViva" className="img-fluid" />
                            <h3>A Conquista da Casa da nova</h3>
                        </div>
                        <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12">
                            <p>
                                Para muita gente, uma casa é um endereço. Mas para a maioria das pessoas, uma casa vai além. Uma casa nova é uma conquista. É este sentimento que nos faz ir em frente para que mais e mais pessoas possam sentir o mesmo. E assim, estarmos juntos neste processo
                                e na hora da comemoração. CasaViva: A conquista da casa nova.
                            </p>
                            <a href="/sobre-casaviva" className="btn-primary-white">
                                Sobre CasaViva
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreCasaViva