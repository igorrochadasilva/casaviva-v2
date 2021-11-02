import React from 'react'
import '../../../assets/scss/components/FaleConosco/index.scss'

const FaleConosco = () => {
  return (
    <section id="faleConoscoSec">
      <div className="container_app">
        <div className="el-row is-align-middle el-row--flex">
          <div className="st el-col el-col-24 el-col-xs-24 el-col-sm-12">
            <h3 className="hidden-sm-and-up">
              Fale Conosco
              <br /> Agora Mesmo
            </h3>
            <img
              width="285"
              height="314"
              src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/538929c.svg"
              alt="Ícone de carta"
            />
          </div>
          <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12">
            <div className="content">
              <h3 className="hidden-sm-and-down">Fale Conosco Agora Mesmo</h3>
              <p>
                Quer falar sobre terrenos, trabalhar conosco, dúvidas ou quaisquer outras
                informações, manda uma mensagem pra gente.
              </p>
              <a href="/fale-conosco" className="btn-primary-white">
                Enviar uma mensagem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaleConosco
