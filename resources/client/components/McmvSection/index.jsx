import React from 'react';
import '../../../assets/scss/components/McmvSection/index.scss';

const McmvSection = () => {
    return (
        <section id="mcmvSection" className="empPage">
            <div className="container_app">
                <div className="el-row is-align-middle el-row--flex">
                    <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12">
                        <h3>
                            O que é o programa “Casa Verde e Amarela?”
                        </h3>
                        <p>
                            O Programa Casa Verde e Amarela é uma iniciativa do Governo Federal que oferece facilidades na compra de imóveis para famílias com renda até 7 mil reais.
                        </p>
                        <div className="items-doc">
                            <div>
                                <h5>Condições atrativas de financiamento</h5>
                                <h5>Subsídio de até R$ 29.000,00</h5>
                                <h5>Use seu FGTS</h5>
                                <h5>Financiamento em até 30 anos</h5>
                            </div>
                        </div>
                    </div>
                    <div className="nd el-col el-col-24 el-col-xs-24 el-col-sm-12">
                        <img src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/ab795b8.png" alt="CVEA" />
                        <a href="/minha-casa-minha-vida" className="btn-primary-red">
                            Saiba Mais
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default McmvSection