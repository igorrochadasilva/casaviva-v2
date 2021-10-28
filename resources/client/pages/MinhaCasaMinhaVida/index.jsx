import React from 'react'

//pages
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Simular from '../../components/Simulador/index'

const MinhaCasaMinhaVida = () => {
  return (
    <div>
      <Header />
      <div id="page-mcmv">
        <section id="bannermcmv">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/75dafae.jpg"
            />
            <source srcSet="https://i.imgur.com/h6kug1t.jpg" />
            <img
              src="https://i.imgur.com/h6kug1t.jpg"
              alt="Imagem de um rapaz feliz por conquistar sua casa própria"
              className="img-fluid"
            />
          </picture>

          <div className="wrap-container">
            <div className="container_app">
              <div className="content">
                <h1>
                  O melhor
                  <br /> caminho
                  <br /> para sua casa
                  <br /> própria
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section id="infosmcmv">
          <section id="mcmvSection">
            <div className="container_app">
              <div className="el-row is-align-middle el-row--flex">
                <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12">
                  <h3>O que é o programa “Casa Verde e Amarela?”</h3>
                  <p>
                    O Programa Casa Verde e Amarela é uma iniciativa do Governo Federal que oferece
                    facilidades na compra de imóveis para famílias com renda até 7 mil reais.
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
                  <img
                    src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/ab795b8.png"
                    alt="CVEA"
                  />
                </div>
              </div>
            </div>
            <div className="sectionSeparator container_app st">
              <hr />
            </div>
          </section>
          <div className="container_app">
            <div id="questionsMcmv" className="el-row">
              <div className="el-col el-col-24">
                <h3>Dúvidas Frequentes</h3>
              </div>
              <div className="item el-col el-col-24 el-col-xs-24">
                <h4>O que é renda familiar?</h4>
                <ul>
                  <li>
                    É a renda composta por 1 ou mais integrantes da mesma família! Pode ser cônjuge,
                    filhos (solteiros), namorado (a), por exemplo.
                  </li>
                </ul>
              </div>
              <div className="item el-col el-col-24 el-col-xs-24">
                <h4>Tem renda familiar ou individual acima de 7 mil reais e quer comprar?</h4>
                <ul>
                  <li>
                    Temos unidades para você também! A diferença é que não existem os benefícios do
                    programa Minha Casa Minha Vida para esta faixa de renda. Mas mesmo assim você
                    pode realizar seu sonho com a CasaViva com renda familiar de até 10 salários
                    mínimos!
                  </li>
                </ul>
              </div>
              <div className="item el-col el-col-24 el-col-xs-24">
                <h4>Quem não pode participar?</h4>
                <ul>
                  <li>
                    Não podem participar do Programa, aqueles que: <br /> • Tem imóvel no nome{' '}
                    <br /> • Já recebeu benefício habitacional <br /> • Ter financiamento de imóvel
                    no nome
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container_app">
            <div id="documentacaoMcmv" className="el-row">
              <div className="el-col el-col-24">
                <h3>Documentação</h3>
              </div>
              <div className="item el-col el-col-24 el-col-xs-24">
                <h4>Como faço para saber minha aprovação no programa?</h4>
                <ul>
                  <li>
                    Você precisa entregar alguns documentos para fazer análise de crédito e saber o
                    seu poder de financiamento! Podemos fazer essa simulação para você. Confira a
                    relação de documentos:
                  </li>
                </ul>
              </div>
              <div className="items-doc el-col el-col-24 el-col-xs-24">
                <div>
                  <h5>RG ou CNH</h5>
                  <h5>CPF</h5>
                  <h5>Imposto de renda</h5>
                  <h5>Documento de estado civil</h5>
                  <h5>Comprovante de endereço</h5>
                  <h5>Carteira de trabalho</h5>
                  <h5>Extrato do FGTS</h5>
                </div>
              </div>
              <div className="items-doc el-col el-col-24 el-col-xs-24">
                <ul>
                  <li>Sou CLT ou funcionário público:</li>
                </ul>
                <div>
                  <h5>2 últimos holerites</h5>
                </div>
              </div>
              <div className="items-doc el-col el-col-24 el-col-xs-24">
                <ul>
                  <li>Sou autônomo:</li>
                </ul>
                <div>
                  <h5>Extrato bancário dos últimos 6 meses</h5>
                </div>
              </div>
              <div className="el-col el-col-24 el-col-xs-24">
                <h3 className="spaced">
                  Como faço para comprar meu imóvel no Programa Casa Verde e Amarela?
                </h3>
              </div>
              <div className="el-col el-col-24 el-col-xs-24">
                <h3 className="spaced">
                  Pronto! Agora que você já sabe como funciona o
                  <span>Programa Casa Verde e Amarela,</span>
                  vamos fazer uma simulação? É rápido e super fácil.
                  <br />
                  Preencha abaixo!
                </h3>
              </div>
            </div>
          </div>
        </section>
        <Simular />
      </div>
      <Footer />
    </div>
  )
}

export default MinhaCasaMinhaVida
