import React from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../../assets/scss/pages/Sustentabilidade/index.scss';

const Sustentabilidade = () => {
  return (
    <div>
      <Header />
      <div id="page-sustentabilidade">
        <section id="sustentabilidade" className="container_app">
          <div className="el-row">
            <div className="el-col el-col-24 el-col-xs-24
                el-col-sm-12">
              <div className="content">
                <h1 >
                  Sustentabilidade
                </h1>
                <p >
                  Além de pensar em cada detalhe para seu conforto e bem estar, nós também atuamos com responsabilidade prezando a preservação do meio ambiente. Por isso, nossos projetos contam com medidas que estimulam a conscientização e proporciona economia para todos.
                </p>
              </div>
              <div className="list">
                <ul >
                  <li >
                    <div className="icon">
                      <img src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/f4a4a69.png" alt="Bicicleta em área verde" />
                    </div>
                    <h5 >
                      Bicicletário
                    </h5>
                    <p >
                      Os empreendimentos preevem espaços com bicicletas entregues pela CasaViva, contribuindo para a redução de veículos automotores nas ruas, o que melhora o trânsito e reduz a emissão de poluentes na atmosfera.
                    </p>
                  </li>
                  <li >
                    <div className="icon">
                      <img src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/cef090f.png" alt="Motor elétrico de elevator" />
                    </div>
                    <h5 >
                      Elevadores com motores de alta performance
                    </h5>
                    <p >
                      Além de proporcionar mais segurança, reduzem o consumo de energia.
                    </p>
                  </li>
                  <li >
                    <div className="icon">
                      <img src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/b1cb697.png" alt="Medidor de água" />
                    </div>
                    <h5 >
                      Previsão de medidores individuais de água e gás*
                    </h5>
                    <p >
                      Facilita o controle do consumo e evita o desperdício, estimulando o uso consciente dos recursos naturais.
                      <br />
                      <small >
                        * Previsão em projeto: implantação e
                        manutenção serão de
                        responsabilidade do condomínio.
                      </small>
                    </p>
                  </li>
                  <li >
                    <div className="icon">
                      <img src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/9f5f15a.png" alt="Persiana" />
                    </div>
                    <h5 >
                      Utilização de esquadrias de dormitórios com persiana de enrolar
                    </h5>
                    <p >
                      Permite uma melhor iluminação e aeração do ambiente e reduz o consumo de energia pelo usuário.
                    </p>
                  </li>
                  <li >
                    <div className="icon">
                      <img src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/05b4558.png" alt="Tubos PPR ou PEX" />
                    </div>
                    <h5 >
                      Utilização de tubos PPR e/ou PEX nas instalações hidráulicas de água quente.
                    </h5>
                    <p >
                      Reduz o tempo de instalação do sistema hidráulico, garantindo ótimo desempenho e eliminando riscos de vazamento e entupimento, o que representa diminuição dos custos de obra e manutenção.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="el-col el-col-24 el-col-xs-24 el-col-sm-10">
              <img src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/01678fc.png" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Sustentabilidade
