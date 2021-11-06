import React from 'react'
import '../../../assets/scss/components/BannerInstitucional/index.scss';

const BannerInstitucional = () => {
    return (
        <div className="BannerInstitucional">
            <picture >
                <source media="(max-width: 767px)" srcSet="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/874950a.jpg" />
                <img src="https://i.imgur.com/XIxQ7TM.png" alt="Banner institucional CasaViva" className="img-fluid" />
            </picture>
            <div className="wrap-container">
                <div className="container_app">
                    <div className="titleWrapper">
                        <h1>
                            O sonho da sua casa própria começa aqui
                        </h1>
                    </div>
                    <div className="action">
                        <a href="/minha-casa-minha-vida" className="btn btn-primary-white">
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerInstitucional
