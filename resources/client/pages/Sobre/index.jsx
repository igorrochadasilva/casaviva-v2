import React from 'react'

//pages
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Sobre = () => {
  return (
    <div>
      <Header />
      <div id="page-sobre">
        <section id="banner-sobre">
          <img
            src="https://i.imgur.com/DiuMctM.png"
            alt="Imagem do time da CasaViva, com seis pessoas, sendo elas cinco homens e uma mulher"
            className="img-fluid"
          />
        </section>
        <section id="infos-sobre">
          <div className="container_app">
            <div className="st el-row is-align-middle el-row--flex mg-rl-n10">
              <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pd-rl-10">
                <h1>O sonho da sua casa própria começa aqui</h1>
                <p>
                  A CasaViva Construtora e Incorporadora foi fundada em 2018 com a parceria de
                  grandes nomes do mercado imobiliário, como Jayme Flechtman e Eduardo Leite, ex
                  executivos da Cyrela, e Roberto Matos e Carlos Mauaccad, fundadores da Exto
                  Incorporação e Construção.
                  <br /> <br />
                  Resultado desta parceria é a essência de solidez, qualidade, comprometimento e
                  foco no cliente trazidos para os produtos CasaViva, que vem atuando de forma ímpar
                  com seus clientes.
                  <br /> <br />
                  Com foco no mercado MCMV na capital de São Paulo, observou-se uma oportunidade de
                  atuar com diferencial de realizar o sonho da casa própria por outro ângulo: pelo
                  olhar do cliente.
                  <br /> <br />
                  Uma casa nova é uma conquista. É a celebração de anos e anos de dedicação,
                  economia e um objetivo maior. É querer muito, se esforçar mais ainda e chegar lá.
                  Uma casa nova nasce como um desejo que sai do coração e se transforma em tijolos,
                  com uma vontade inabalável de quem quer e vai realizar este desejo.
                  <br /> <br />
                  Uma casa nova é muito mais que um endereço, é uma segurança para toda a família. É
                  a certeza para os pais que os filhos terão um presente melhor e um futuro
                  promissor. Pouco importa o tamanho desta casa nova, o que vale é o sabor da
                  vitória, o momento único do pegar as chaves e fazer desta casa, um lar. Daqui para
                  a frente é uma nova experiência de vida para todos. É este sentimento que nos faz
                  ir em frente para que mais e mais pessoas possam sentir o mesmo.
                  <br /> <br />E assim, estarmos juntos neste processo e na hora da comemoração.
                </p>
              </div>
              <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pd-rl-10">
                <img
                  src="https://qa-cv-cdn.adjektiv.com.br/public/banner_about_letreiro.png"
                  alt="Um letreiro animado escrito CasaViva"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="container_app">
            <div className="el-row" id="details-sobre">
              <div className="el-col el-col-24 el-col-xs-24 el-col-sm-4">
                <h3>
                  CasaViva
                  <br />
                  em números
                </h3>
              </div>
              <div className="list el-col el-col-24 el-col-offset-1 el-col-xs-24 el-col-sm-19 ">
                <div className="el-row mg-rl-n25">
                  <div className="item el-col el-col-24 el-col-xs-12 el-col-sm-6 pd-lr-25">
                    <table>
                      <tr>
                        <td>
                          <i className="cv-icons cv-handsmoney"></i>
                        </td>
                        <td>
                          <h4>
                            Unidades
                            <br />
                            lançadas
                          </h4>
                          <p>269 unidades</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="item el-col el-col-24 el-col-xs-12 el-col-sm-6 pd-lr-25">
                    <table>
                      <tr>
                        <td>
                          <i className="cv-icons cv-percentage"></i>
                        </td>
                        <td>
                          <h4>Unidades em desenvolvimento</h4>
                          <p>4.535 unidades</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SEÇÃO NOSSO TIME */}
        {/* SEÇÃO FALE CONOSCO */}
      </div>
      <Footer />
    </div>
  )
}

export default Sobre
