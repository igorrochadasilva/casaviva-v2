import React from 'react';
import '../../../assets/scss/components/InstagramSection/index.scss';


const InstagramSection = () => {
    return (
        <section id="instagramSec" >
            <h2 className="container_app">Instagram CasaViva</h2>
            <div className="el-row is-justify-center is-align-center el-row--flex">
                <div className="el-col el-col-24 el-col-xs-12 el-col-sm-8">
                    <div className="item">
                        <img src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/203614918_354899709396200_3296354014097276357_n.jpeg" alt="Imagem do instagram da Incorporadora CasaViva" />
                    </div>
                </div>
                <div className="el-col el-col-24 el-col-xs-12 el-col-sm-8">
                    <div className="item">
                        <img src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/202421803_549219922905196_201250078377570505_n.jpeg" alt="Imagem do instagram da Incorporadora CasaViva" />
                    </div>
                </div>
                <div className="el-col el-col-24 el-col-xs-12 el-col-sm-8">
                    <div className="item">
                        <img src="https://casaviva-prod.s3.us-east-1.amazonaws.com/public/current-build/img/181729276_315827383351014_567460225208622748_n.jpeg" alt="Imagem do instagram da Incorporadora CasaViva" />
                    </div>
                </div>
            </div>
            <div className="wrapButton">
                <a href="https://www.instagram.com/minha_casa_viva/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="btn-primary-red">
                    Siga nosso Instagram
                </a>
            </div>
        </section>
    );
}

export default InstagramSection